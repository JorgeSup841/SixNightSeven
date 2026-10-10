import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Authservice } from "../../services/authservice";
import { Reservasservice } from "../../services/reservasservice";

@Component({
    selector: "app-iniciosesioncomponent",
    standalone: false,
    templateUrl: "./iniciosesioncomponent.html",
    styleUrl: "./iniciosesioncomponent.css"
})
export class Iniciosesioncomponent {
    private auth = inject(Authservice);
    private reservas = inject(Reservasservice);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    correo = "";
    contrasena = "";
    error = "";
    cargando = false;
    returnUrl = "/";

    ngOnInit(): void {
        const destino = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
        this.returnUrl = destino.startsWith("/") && !destino.startsWith("//") ? destino : "/";

        if (this.auth.estaAutenticado()) {
            this.router.navigateByUrl(this.returnUrl);
        }
    }

    async iniciarSesion(): Promise<void> {
        this.error = "";
        if (!this.correo.trim() || !this.contrasena) {
            this.error = "Completa el correo y la contraseña.";
            return;
        }

        this.cargando = true;
        try {
            const usuario = await this.auth.iniciarSesion(this.correo, this.contrasena);
            this.reservas.migrarReservasAntiguas(usuario.id, usuario.correo);
            await this.router.navigateByUrl(this.returnUrl);
        } catch (error) {
            this.error = error instanceof Error ? error.message : "No fue posible iniciar sesión.";
        } finally {
            this.cargando = false;
        }
    }
}
