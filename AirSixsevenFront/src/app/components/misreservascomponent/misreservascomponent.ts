import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Reservasservice } from "../../services/reservasservice";
import { Reservasmodel } from "../../models/reservasmodel";
import { Authservice } from "../../services/authservice";

@Component({
    selector: "app-misreservascomponent",
    standalone: false,
    styleUrl: "./misreservascomponent.css",
    templateUrl: "./misreservascomponent.html",
})
export class Misreservascomponent implements OnInit {
    private reservasService = inject(Reservasservice);
    private authService = inject(Authservice);
    private router = inject(Router);

    reservas: Reservasmodel[] = [];

    ngOnInit(): void {
        const usuario = this.authService.getUsuarioActual();

        if (!usuario) {
            this.router.navigate(["/iniciar-sesion"], {
                queryParams: { returnUrl: "/mis-reservas" }
            });
            return;
        }

        this.reservas = this.reservasService.getReservasUsuario(usuario.id).reverse();
    }
}
