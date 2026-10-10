import { Injectable } from "@angular/core";
import { Reservasmodel } from "../models/reservasmodel";

@Injectable({ providedIn: "root" })
export class Reservasservice {
    private readonly clave = "reservas";

    private leer(): Reservasmodel[] {
        try {
            const contenido = localStorage.getItem(this.clave);

            if (!contenido) {
                return [];
            }

            const datos: unknown = JSON.parse(contenido);

            return Array.isArray(datos)
                ? datos as Reservasmodel[]
                : [];
        } catch (error) {
            console.error("Error leyendo las reservas:", error);
            return [];
        }
    }

    private guardar(reservas: Reservasmodel[]): void {
        localStorage.setItem(
            this.clave,
            JSON.stringify(reservas)
        );
    }

    getReservas(): Reservasmodel[] {
        return this.leer();
    }

    getReservasUsuario(usuarioId: string): Reservasmodel[] {
        return this.leer().filter(
            reserva => reserva.usuarioId === usuarioId
        );
    }

    agregar(reserva: Reservasmodel): void {
        if (!reserva.usuarioId) {
            throw new Error(
                "La reserva debe estar asociada a una cuenta iniciada."
            );
        }

        const reservas = this.leer();

        if (
            this.haySolapamiento(
                reserva.alojamientoId,
                reserva.fechaLlegada,
                reserva.fechaSalida
            )
        ) {
            throw new Error(
                "El alojamiento ya tiene una reserva confirmada en esas fechas."
            );
        }

        if (reservas.some(item => item.id === reserva.id)) {
            throw new Error("Esta reserva ya fue guardada.");
        }

        reservas.push(reserva);
        this.guardar(reservas);
    }

    eliminarReserva(id: string, usuarioId: string): boolean {
        const reservas = this.leer();

        const existe = reservas.some(
            reserva =>
                reserva.id === id &&
                reserva.usuarioId === usuarioId
        );

        if (!existe) {
            return false;
        }

        const reservasActualizadas = reservas.filter(
            reserva =>
                !(
                    reserva.id === id &&
                    reserva.usuarioId === usuarioId
                )
        );

        this.guardar(reservasActualizadas);

        return true;
    }

    getReservaPorId(id: string): Reservasmodel | undefined {
        return this.leer().find(
            reserva => reserva.id === id
        );
    }

    migrarReservasAntiguas(
        usuarioId: string,
        correo: string
    ): void {
        const correoNormalizado = correo.trim().toLowerCase();
        const reservas = this.leer();
        let cambio = false;

        for (const reserva of reservas) {
            if (
                !reserva.usuarioId &&
                reserva.correo?.trim().toLowerCase() === correoNormalizado
            ) {
                reserva.usuarioId = usuarioId;
                cambio = true;
            }
        }

        if (cambio) {
            this.guardar(reservas);
        }
    }

    getReservaPorIdUsuario(
        id: string,
        usuarioId: string
    ): Reservasmodel | undefined {
        return this.leer().find(
            reserva =>
                reserva.id === id &&
                reserva.usuarioId === usuarioId
        );
    }

    haySolapamiento(
        alojamientoId: number,
        llegada: string,
        salida: string
    ): boolean {
        if (!llegada || !salida || salida <= llegada) {
            return false;
        }

        return this.leer().some(
            reserva =>
                reserva.alojamientoId === alojamientoId &&
                reserva.estado === "CONFIRMADA" &&
                Boolean(reserva.fechaLlegada) &&
                Boolean(reserva.fechaSalida) &&
                llegada < reserva.fechaSalida &&
                salida > reserva.fechaLlegada
        );
    }

    estaReservado(alojamientoId: number): boolean {
        return this.leer().some(
            reserva =>
                reserva.alojamientoId === alojamientoId &&
                reserva.estado === "CONFIRMADA"
        );
    }
}