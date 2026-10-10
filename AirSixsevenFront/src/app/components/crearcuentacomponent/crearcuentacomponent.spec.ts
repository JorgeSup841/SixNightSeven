import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Crearcuentacomponent } from "./crearcuentacomponent";
import { Authservice } from "../../services/authservice";
import { Reservasservice } from "../../services/reservasservice";

describe("Crearcuentacomponent", () => {
    let component: Crearcuentacomponent;
    let fixture: ComponentFixture<Crearcuentacomponent>;
    const authMock = {
        estaAutenticado: vi.fn(),
        registrar: vi.fn()
    };
    const reservasMock = {
        migrarReservasAntiguas: vi.fn()
    };
    const routeMock = {
        snapshot: {
            queryParamMap: {
                get: vi.fn()
            }
        }
    };

    beforeEach(async () => {
        authMock.estaAutenticado.mockReset().mockReturnValue(false);
        authMock.registrar.mockReset();
        reservasMock.migrarReservasAntiguas.mockReset();
        routeMock.snapshot.queryParamMap.get.mockReset().mockReturnValue(null);

        await TestBed.configureTestingModule({
            declarations: [Crearcuentacomponent],
            imports: [FormsModule, RouterModule.forRoot([])],
            providers: [
                { provide: Authservice, useValue: authMock },
                { provide: Reservasservice, useValue: reservasMock },
                { provide: ActivatedRoute, useValue: routeMock }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(Crearcuentacomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("debería crearse", () => {
        expect(component).toBeTruthy();
    });

    it("debería validar los campos vacíos sin registrar la cuenta", async () => {
        await component.crearCuenta();
        expect(component.error).toBe("Completa todos los campos.");
        expect(authMock.registrar).not.toHaveBeenCalled();
    });

    it("debería rechazar contraseñas que no coinciden", async () => {
        component.nombre = "Jorge Núñez";
        component.correo = "jorge@example.com";
        component.contrasena = "claveSegura123";
        component.confirmarContrasena = "otraClave123";

        await component.crearCuenta();

        expect(component.error).toBe("Las contraseñas no coinciden.");
        expect(authMock.registrar).not.toHaveBeenCalled();
    });
});
