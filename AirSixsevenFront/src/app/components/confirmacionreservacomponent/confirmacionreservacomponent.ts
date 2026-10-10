import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Reservasservice } from "../../services/reservasservice";
import { Reservasmodel } from "../../models/reservasmodel";
import { Authservice } from "../../services/authservice";

@Component({
    selector: "app-confirmacionreservacomponent",
    standalone: false,
    styleUrl: "./confirmacionreservacomponent.css",
    templateUrl: "./confirmacionreservacomponent.html",
})
export class Confirmacionreservacomponent implements OnInit {
    private ruta = inject(ActivatedRoute);
    private router = inject(Router);
    private reservasService = inject(Reservasservice);
    private authService = inject(Authservice);

    reserva?: Reservasmodel;

    ngOnInit(): void {
        const id = this.ruta.snapshot.paramMap.get("id") ?? "";
        const usuario = this.authService.getUsuarioActual();

        if (!usuario) {
            this.router.navigate(["/iniciar-sesion"], {
                queryParams: { returnUrl: this.router.url }
            });
            return;
        }

        this.reserva = this.reservasService.getReservaPorIdUsuario(id, usuario.id);
    }
}
