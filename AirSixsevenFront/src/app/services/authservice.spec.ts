import { TestBed } from "@angular/core/testing";
import { beforeEach, describe, expect, it } from "vitest";
import { Authservice } from "./authservice";

describe("Authservice", () => {
    let service: Authservice;

    beforeEach(() => {
        localStorage.clear();
        TestBed.configureTestingModule({ providers: [Authservice] });
        service = TestBed.inject(Authservice);
    });

    it("debería crearse", () => {
        expect(service).toBeTruthy();
    });

    it("debería indicar que no hay una sesión al iniciar", () => {
        expect(service.estaAutenticado()).toBe(false);
        expect(service.getUsuarioActual()).toBeNull();
    });

    it("debería rechazar una contraseña demasiado corta al registrar", async () => {
        await expect(service.registrar("Jorge Núñez", "jorge@example.com", "123")).rejects.toThrow(
            "La contraseña debe tener al menos 8 caracteres."
        );
    });

    it("debería eliminar la sesión al cerrar sesión", () => {
        localStorage.setItem("mistays_usuario_activo", "USR-PRUEBA");
        service.cerrarSesion();
        expect(localStorage.getItem("mistays_usuario_activo")).toBeNull();
    });
});
