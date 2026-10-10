import {Injectable} from "@angular/core";
import {Usuariomodel, Usuariosesionmodel} from "../models/usuariomodel";

@Injectable({
    providedIn: "root"
})
export class Authservice {

    private claveUsuarios = "mistays_usuarios";
    private claveSesion = "mistays_usuario_activo";

    registrar(nombre: string, correo: string, contrasena: string): Usuariosesionmodel {
        nombre = nombre.trim();
        correo = correo.trim().toLowerCase();

        if (nombre.length < 3) {
            throw new Error("El nombre debe tener al menos 3 caracteres.");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo)) {
            throw new Error("Escribe un correo válido.");
        }

        if (contrasena.length < 8) {
            throw new Error("La contraseña debe tener al menos 8 caracteres.");
        }

        const usuarios: Usuariomodel[] = JSON.parse(
            localStorage.getItem(this.claveUsuarios) || "[]"
        );

        const existe = usuarios.find(u => u.correo === correo);

        if (existe) {
            throw new Error("Ese correo ya está registrado.");
        }

        const usuario: Usuariomodel = {
            id: Date.now().toString(),
            nombre: nombre,
            correo: correo,
            contrasena: contrasena,
            fechaRegistro: new Date().toISOString()
        };

        usuarios.push(usuario);

        localStorage.setItem(this.claveUsuarios, JSON.stringify(usuarios));
        localStorage.setItem(this.claveSesion, usuario.id);

        return {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo
        };
    }

    iniciarSesion(correo: string, contrasena: string): Usuariosesionmodel {
        correo = correo.trim().toLowerCase();

        const usuarios: Usuariomodel[] = JSON.parse(
            localStorage.getItem(this.claveUsuarios) || "[]"
        );

        const usuario = usuarios.find(
            u => u.correo === correo && u.contrasena === contrasena
        );

        if (!usuario) {
            throw new Error("Correo o contraseña incorrectos.");
        }

        localStorage.setItem(this.claveSesion, usuario.id);

        return {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo
        };
    }

    getUsuarioActual(): Usuariosesionmodel | null {
        const id = localStorage.getItem(this.claveSesion);

        if (!id) {
            return null;
        }

        const usuarios: Usuariomodel[] = JSON.parse(
            localStorage.getItem(this.claveUsuarios) || "[]"
        );

        const usuario = usuarios.find(u => u.id === id);

        if (!usuario) {
            return null;
        }

        return {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo
        };
    }

    estaAutenticado(): boolean {
        return this.getUsuarioActual() !== null;
    }

    cerrarSesion(): void {
        localStorage.removeItem(this.claveSesion);
    }
}
