import {Component, inject, OnInit} from "@angular/core";
import { Router } from "@angular/router";

import { Alojamiento } from "../../models/alojamientomodel";
import {
    Cotizacionmodel,
    Reservasmodel
} from "../../models/reservasmodel";

import { Cotizacionservice } from "../../services/cotizacionservice";
import { Reservasservice } from "../../services/reservasservice";
import { Authservice } from "../../services/authservice";

interface BorradorReserva {
    alojamiento: Alojamiento;
    llegada?: string;
    salida?: string;
    huespedes?: number;
}

@Component({
    selector: "app-reservascomponent",
    standalone: false,
    styleUrl: "./reservascomponent.css",
    templateUrl: "./reservascomponent.html"
})
export class Reservascomponent implements OnInit {

    alojamiento: Alojamiento | null = null;
    cargando = true;

    fechaMinima = "";
    fechaLlegada = "";
    fechaSalida = "";
    numeroHuespedes = 1;

    nombreHuesped = "";
    correo = "";
    telefonoHuesped = "";
    documentoHuesped = "";

    esNombreValido = false;
    esCorreoValido = false;
    esTelefonoValido = false;
    esCedulaValida = false;

    nombreValidado = "";
    correoValidado = "";
    telefonoCorrecto = "";
    cedulaCorrecta = "";

    cotizacion: Cotizacionmodel | null = null;
    errorReserva = "";

    private cotizacionService = inject(Cotizacionservice);
    private reservasService = inject(Reservasservice);
    private authService = inject(Authservice);
    private router = inject(Router);

    ngOnInit(): void {
        this.fechaMinima = this.cotizacionService.hoy();

        const estado = history.state as Partial<BorradorReserva>;

        let borrador: BorradorReserva | null = estado?.alojamiento
            ? estado as BorradorReserva
            : null;

        const usuario = this.authService.getUsuarioActual();

        if (!usuario) {
            if (borrador?.alojamiento) {
                try {
                    localStorage.setItem(
                        "reservaPendiente",
                        JSON.stringify(borrador)
                    );
                } catch (error) {
                    console.error(
                        "No fue posible guardar la selección de reserva:",
                        error
                    );
                }
            }

            this.cargando = false;

            this.router.navigate(["/iniciar-sesion"], {
                queryParams: { returnUrl: "/reservas" }
            });

            return;
        }

        if (!borrador) {
            try {
                const guardado = localStorage.getItem("reservaPendiente");

                if (guardado) {
                    borrador = JSON.parse(guardado) as BorradorReserva;
                }
            } catch (error) {
                console.error(
                    "No fue posible recuperar la selección de reserva:",
                    error
                );
            }
        }

        if (borrador?.alojamiento) {
            this.alojamiento = borrador.alojamiento;
            this.fechaLlegada = borrador.llegada || "";
            this.fechaSalida = borrador.salida || "";
            this.numeroHuespedes = borrador.huespedes
                ? Number(borrador.huespedes)
                : 1;

            localStorage.removeItem("reservaPendiente");

            this.verificarNombre(usuario.nombre);
            this.verificarCorreo(usuario.correo);
            this.actualizarCotizacion();
        } else {
            this.router.navigate(["/alojamientos"]);
        }

        this.cargando = false;
    }

    verificarNombre(nombre: string): void {
        this.nombreHuesped = nombre;

        const valor = nombre.trim();

        this.esNombreValido =
            /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]{3,}$/.test(valor);

        this.nombreValidado = this.esNombreValido
            ? ""
            : "Introduce un nombre válido.";
    }

    verificarCorreo(correo: string): void {
        this.correo = correo;

        this.esCorreoValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo.trim());

        this.correoValidado = this.esCorreoValido
            ? ""
            : "Introduce un correo válido.";
    }

    verificarTelefono(telefono: string): void {
        this.telefonoHuesped = telefono;

        const digitos = telefono.replace(/\D/g, "");

        this.esTelefonoValido =
            /^[+\d\s()-]+$/.test(telefono.trim()) &&
            digitos.length >= 7 &&
            digitos.length <= 15;

        this.telefonoCorrecto = this.esTelefonoValido
            ? ""
            : "Introduce un teléfono válido.";
    }

    verificarCedula(cedula: string): void {
        this.documentoHuesped = cedula;

        this.esCedulaValida = /^\d{5,15}$/.test(cedula.trim());

        this.cedulaCorrecta = this.esCedulaValida
            ? ""
            : "El documento debe contener entre 5 y 15 dígitos.";
    }

    actualizarCotizacion(): void {
        if (!this.alojamiento) {
            this.cotizacion = null;
            return;
        }

        this.cotizacion = this.cotizacionService.cotizar(
            this.alojamiento,
            this.fechaLlegada,
            this.fechaSalida,
            Number(this.numeroHuespedes)
        );
    }

    get puedeConfirmar(): boolean {
        return this.authService.estaAutenticado() &&
            !!this.alojamiento &&
            this.esNombreValido &&
            this.esCorreoValido &&
            this.esTelefonoValido &&
            this.esCedulaValida &&
            !!this.cotizacion &&
            this.cotizacion.valida;
    }

    confirmarReserva(): void {
        this.errorReserva = "";

        const usuario = this.authService.getUsuarioActual();

        if (!usuario) {
            this.router.navigate(["/iniciar-sesion"], {
                queryParams: { returnUrl: "/reservas" }
            });
            return;
        }

        this.actualizarCotizacion();

        const cotizacion = this.cotizacion;

        if (!this.alojamiento || !cotizacion) {
            this.errorReserva = "Selecciona primero un alojamiento.";
            return;
        }

        if (!this.puedeConfirmar) {
            this.errorReserva = cotizacion.errores.length > 0
                ? cotizacion.errores.join(" ")
                : "Revisa tus datos, las fechas y el número de huéspedes.";

            return;
        }

        const reserva: Reservasmodel = {
            id: "RES-" +
                Date.now().toString(36).toUpperCase() +
                "-" +
                Math.random().toString(36).slice(2, 7).toUpperCase(),

            usuarioId: usuario.id,
            alojamientoId: this.alojamiento.id,
            alojamientoNombre: this.alojamiento.nombre,
            ciudad: this.alojamiento.ciudad,
            imagen: this.alojamiento.imagenPrincipal,
            fechaLlegada: this.fechaLlegada,
            fechaSalida: this.fechaSalida,
            huespedes: Number(this.numeroHuespedes),
            noches: cotizacion.noches,
            total: cotizacion.total,
            nombreHuesped: this.nombreHuesped.trim(),
            correo: this.correo.trim(),
            telefonoHuesped: this.telefonoHuesped.trim(),
            documentoHuesped: this.documentoHuesped.trim(),
            estado: "CONFIRMADA"
        };

        try {
            this.reservasService.agregar(reserva);

            this.router.navigate([
                "/reserva-confirmada",
                reserva.id
            ]).then(correcto => {
                if (!correcto) {
                    this.errorReserva =
                        "La reserva se guardó, pero no se pudo abrir la confirmación.";
                }
            }).catch(error => {
                console.error("Error abriendo la confirmación:", error);

                this.errorReserva =
                    "La reserva se guardó, pero no se pudo abrir la confirmación.";
            });
        } catch (error) {
            console.error("Error guardando la reserva:", error);

            this.errorReserva = error instanceof Error
                ? error.message
                : "No se pudo guardar la reserva en este navegador.";
        }
    }
}