import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Reservasservice } from "../../services/reservasservice";
import { Reservasmodel } from "../../models/reservasmodel";
import { Authservice } from "../../services/authservice";

@Component({
    selector: "app-misreservascomponent",
    standalone: false,
    styleUrl: "./misreservascomponent.css",
    templateUrl: "./misreservascomponent.html"
})
export class Misreservascomponent implements OnInit {

    private reservasService = inject(Reservasservice);
    private authService = inject(Authservice);
    private router = inject(Router);

    reservas: Reservasmodel[] = [];
    mensaje = "";

    ngOnInit(): void {
        const usuario = this.authService.getUsuarioActual();

        if (!usuario) {
            this.router.navigate(["/iniciar-sesion"], {
                queryParams: {
                    returnUrl: "/mis-reservas"
                }
            });

            return;
        }

        this.cargarReservas(usuario.id);
    }

    private cargarReservas(usuarioId: string): void {
        this.reservas = this.reservasService
            .getReservasUsuario(usuarioId)
            .reverse();
    }

    cancelarReserva(reserva: Reservasmodel): void {
        this.mensaje = "";

        const usuario = this.authService.getUsuarioActual();

        if (!usuario) {
            this.router.navigate(["/iniciar-sesion"], {
                queryParams: {
                    returnUrl: "/mis-reservas"
                }
            });

            return;
        }

        const confirmado = window.confirm(
            `¿Seguro que deseas cancelar la reserva de "${reserva.alojamientoNombre}"?\n\nEsta acción eliminará la reserva permanentemente.`
        );

        if (!confirmado) {
            return;
        }

        try {
            const eliminada = this.reservasService.eliminarReserva(
                reserva.id,
                usuario.id
            );

            if (!eliminada) {
                this.mensaje =
                    "No se pudo cancelar la reserva. Comprueba que te pertenezca.";
                return;
            }

            this.cargarReservas(usuario.id);

            this.mensaje =
                "La reserva se canceló y se eliminó correctamente.";
        } catch (error) {
            console.error("Error al cancelar la reserva:", error);

            this.mensaje =
                "No se pudo cancelar la reserva. Inténtalo nuevamente.";
        }
    }
}