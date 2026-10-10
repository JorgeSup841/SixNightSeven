import { Injectable, inject } from "@angular/core";
import { Cotizacionmodel } from "../models/reservasmodel";
import { Alojamiento } from "../models/alojamientomodel";
import { Reservasservice } from "./reservasservice";

@Injectable({ providedIn: "root" })
export class Cotizacionservice {
    private reservasService = inject(Reservasservice);

    hoy(): string {
        const date = new Date();
        const mes = String(date.getMonth() + 1).padStart(2, "0");
        const dia = String(date.getDate()).padStart(2, "0");
        return `${date.getFullYear()}-${mes}-${dia}`;
    }

    cotizar(alojamiento: Alojamiento, llegada: string, salida: string, huespedes: number): Cotizacionmodel {
        const errores: string[] = [];
        const fechasPresentes = Boolean(llegada && salida);
        const fechasValidas = fechasPresentes && llegada >= this.hoy() && salida > llegada;

        if (!fechasPresentes) {
            errores.push("Seleccione la fecha de llegada y la fecha de salida.");
        } else {
            if (llegada < this.hoy()) errores.push("La fecha de llegada no puede ser anterior a hoy.");
            if (salida <= llegada) errores.push("La fecha de salida debe ser posterior a la de llegada.");
            if (fechasValidas && this.reservasService.haySolapamiento(alojamiento.id, llegada, salida)) {
                errores.push("Este alojamiento ya tiene una reserva confirmada que se cruza con esas fechas. Elige otro intervalo.");
            }
        }

        if (!huespedes || huespedes < 1) {
            errores.push("Debe haber al menos un huésped.");
        } else if (huespedes > alojamiento.capacidad) {
            errores.push(`Este alojamiento admite máximo ${alojamiento.capacidad} huéspedes.`);
        }

        if (alojamiento.precioNoche <= 0) errores.push("El precio por noche no es válido.");

        const valida = errores.length === 0;
        const noches = fechasValidas
            ? Math.round((new Date(`${salida}T00:00:00`).getTime() - new Date(`${llegada}T00:00:00`).getTime()) / 86400000)
            : 0;
        const subtotal = noches * alojamiento.precioNoche;
        const tarifaLimpieza = alojamiento.tarifaLimpieza;
        const tarifaServicio = subtotal * 0.10;

        return {
            valida,
            errores,
            noches,
            subtotal,
            tarifaLimpieza,
            tarifaServicio,
            total: subtotal + tarifaLimpieza + tarifaServicio
        };
    }
}
