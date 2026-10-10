import { Injectable } from "@angular/core";
import { Usuariomodel, Usuariosesionmodel } from "../models/usuariomodel";

@Injectable({ providedIn: "root" })
export class Authservice {
    private readonly claveUsuarios = "mistays_usuarios";
    private readonly claveSesion = "mistays_usuario_activo";

    private leerUsuarios(): Usuariomodel[] {
        try {
            const contenido = localStorage.getItem(this.claveUsuarios);
            if (!contenido) return [];
            const datos: unknown = JSON.parse(contenido);
            return Array.isArray(datos) ? datos as Usuariomodel[] : [];
        } catch (error) {
            console.error("No fue posible leer las cuentas guardadas:", error);
            return [];
        }
    }

    private guardarUsuarios(usuarios: Usuariomodel[]): void {
        localStorage.setItem(this.claveUsuarios, JSON.stringify(usuarios));
    }

    private crearSal(): string {
        const bytes = crypto.getRandomValues(new Uint8Array(16));
        return Array.from(bytes).map(byte => byte.toString(16).padStart(2, "0")).join("");
    }

    private async crearHash(contrasena: string, sal: string): Promise<string> {
        const clave = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(contrasena),
            "PBKDF2",
            false,
            ["deriveBits"]
        );
        const hash = await crypto.subtle.deriveBits({
            name: "PBKDF2",
            salt: new TextEncoder().encode(sal),
            iterations: 100000,
            hash: "SHA-256"
        }, clave, 256);
        return Array.from(new Uint8Array(hash))
            .map(byte => byte.toString(16).padStart(2, "0"))
            .join("");
    }

    private datosSesion(usuario: Usuariomodel): Usuariosesionmodel {
        return {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo
        };
    }

    async registrar(nombre: string, correo: string, contrasena: string): Promise<Usuariosesionmodel> {
        const nombreLimpio = nombre.trim();
        const correoLimpio = correo.trim().toLowerCase();

        if (nombreLimpio.length < 3) {
            throw new Error("Escribe un nombre de al menos 3 caracteres.");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correoLimpio)) {
            throw new Error("Escribe un correo electrónico válido.");
        }

        if (contrasena.length < 8) {
            throw new Error("La contraseña debe tener al menos 8 caracteres.");
        }

        const usuarios = this.leerUsuarios();
        if (usuarios.some(usuario => usuario.correo.toLowerCase() === correoLimpio)) {
            throw new Error("Ya existe una cuenta registrada con ese correo.");
        }

        const sal = this.crearSal();
        const usuario: Usuariomodel = {
            id: "USR-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 7).toUpperCase(),
            nombre: nombreLimpio,
            correo: correoLimpio,
            contrasenaHash: await this.crearHash(contrasena, sal),
            contrasenaSalt: sal,
            fechaRegistro: new Date().toISOString()
        };

        usuarios.push(usuario);
        this.guardarUsuarios(usuarios);
        localStorage.setItem(this.claveSesion, usuario.id);
        return this.datosSesion(usuario);
    }

    async iniciarSesion(correo: string, contrasena: string): Promise<Usuariosesionmodel> {
        const correoLimpio = correo.trim().toLowerCase();
        const usuario = this.leerUsuarios().find(item => item.correo.toLowerCase() === correoLimpio);

        if (!usuario) {
            throw new Error("El correo o la contraseña no son correctos.");
        }

        const hash = await this.crearHash(contrasena, usuario.contrasenaSalt);
        if (hash !== usuario.contrasenaHash) {
            throw new Error("El correo o la contraseña no son correctos.");
        }

        localStorage.setItem(this.claveSesion, usuario.id);
        return this.datosSesion(usuario);
    }

    getUsuarioActual(): Usuariosesionmodel | null {
        try {
            const id = localStorage.getItem(this.claveSesion);
            if (!id) return null;
            const usuario = this.leerUsuarios().find(item => item.id === id);
            return usuario ? this.datosSesion(usuario) : null;
        } catch (error) {
            console.error("No fue posible recuperar la sesión:", error);
            return null;
        }
    }

    estaAutenticado(): boolean {
        return this.getUsuarioActual() !== null;
    }

    cerrarSesion(): void {
        localStorage.removeItem(this.claveSesion);
    }
}
