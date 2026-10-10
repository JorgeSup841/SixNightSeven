import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Authservice } from "../../services/authservice";
import { Usuariosesionmodel } from "../../models/usuariomodel";

@Component({
    selector: "app-navbarcomponent",
    standalone: false,
    styleUrl: "./navbarcomponent.css",
    templateUrl: "./navbarcomponent.html",
})
export class Navbarcomponent {
    private auth = inject(Authservice);
    private router = inject(Router);

    get usuarioActual(): Usuariosesionmodel | null {
        return this.auth.getUsuarioActual();
    }

    cerrarSesion(): void {
        this.auth.cerrarSesion();
        this.router.navigate(["/"]);
    }
}
