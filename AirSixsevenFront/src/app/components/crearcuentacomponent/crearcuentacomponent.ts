import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Authservice } from "../../services/authservice";
import { Reservasservice } from "../../services/reservasservice";

@Component({
    selector: "app-crearcuentacomponent",
    standalone: false,
    templateUrl: "./crearcuentacomponent.html",
    styleUrl: "./crearcuentacomponent.css"
})
export class Crearcuentacomponent {
    private auth = inject(Authservice);
    private reservas = inject(Reservasservice);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    nombre = "";
    correo = "";
    contrasena = "";
    confirmarContrasena = "";
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

    async crearCuenta(): Promise<void> {
        this.error = "";

        if (!this.nombre.trim() || !this.correo.trim() || !this.contrasena || !this.confirmarContrasena) {
            this.error = "Completa todos los campos.";
            return;
        }

        if (this.contrasena.length < 8) {
            this.error = "La contraseña debe tener al menos 8 caracteres.";
            return;
        }

        if (this.contrasena !== this.confirmarContrasena) {
            this.error = "Las contraseñas no coinciden.";
            return;
        }

        this.cargando = true;
        try {
            const usuario = await this.auth.registrar(this.nombre, this.correo, this.contrasena);
            this.reservas.migrarReservasAntiguas(usuario.id, usuario.correo);
            await this.router.navigateByUrl(this.returnUrl);
        } catch (error) {
            this.error = error instanceof Error ? error.message : "No fue posible crear la cuenta.";
        } finally {
            this.cargando = false;
        }
    }
}
