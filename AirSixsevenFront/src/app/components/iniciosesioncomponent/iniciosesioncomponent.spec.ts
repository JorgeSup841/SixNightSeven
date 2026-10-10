import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Iniciosesioncomponent } from "./iniciosesioncomponent";
import { Authservice } from "../../services/authservice";
import { Reservasservice } from "../../services/reservasservice";

describe("Iniciosesioncomponent", () => {
    let component: Iniciosesioncomponent;
    let fixture: ComponentFixture<Iniciosesioncomponent>;
    const authMock = {
        estaAutenticado: vi.fn(),
        iniciarSesion: vi.fn()
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
        authMock.iniciarSesion.mockReset();
        reservasMock.migrarReservasAntiguas.mockReset();
        routeMock.snapshot.queryParamMap.get.mockReset().mockReturnValue(null);

        await TestBed.configureTestingModule({
            declarations: [Iniciosesioncomponent],
            imports: [FormsModule, RouterModule.forRoot([])],
            providers: [
                { provide: Authservice, useValue: authMock },
                { provide: Reservasservice, useValue: reservasMock },
                { provide: ActivatedRoute, useValue: routeMock }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(Iniciosesioncomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("debería crearse", () => {
        expect(component).toBeTruthy();
    });

    it("debería validar los campos vacíos sin iniciar sesión", async () => {
        await component.iniciarSesion();
        expect(component.error).toBe("Completa el correo y la contraseña.");
        expect(authMock.iniciarSesion).not.toHaveBeenCalled();
    });
});
