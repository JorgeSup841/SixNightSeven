import {ChangeDetectorRef, Component, inject, OnInit} from "@angular/core";

import {Alojamiento, Resena} from "../../models/alojamientomodel";
import {ActivatedRoute} from "@angular/router";
import {Alojamientosservice} from "../../services/alojamientosservice";
import {Cotizacionservice} from "../../services/cotizacionservice";
import {Cotizacionmodel} from "../../models/reservasmodel";
import { Router } from "@angular/router";
import { Authservice } from "../../services/authservice";

@Component({
    selector: "app-detallealojamientocomponent",
    standalone: false,
    styleUrl: "./detallealojamientocomponent.css",
    templateUrl: "./detallealojamientocomponent.html"
})
export class Detallealojamientocomponent implements OnInit {
    private ruta = inject(ActivatedRoute);
    private alojamientosService = inject(Alojamientosservice);
    private cotizacionService = inject(Cotizacionservice);
    private authService = inject(Authservice);
    private router = inject(Router);
    cdr = inject(ChangeDetectorRef);

    alojamiento?: Alojamiento;
    resenas: Resena[] = [];
    cargando = true;
    imagenActiva = '';

    hoy = this.cotizacionService.hoy();
    llegada = '';
    salida = '';
    huespedes = 1;

    get cotizacion(): Cotizacionmodel {
        if (!this.alojamiento) {
            return {
                valida: false, errores: [], noches: 0, subtotal: 0,
                tarifaLimpieza: 0, tarifaServicio: 0, total: 0
            };
        }
        return this.cotizacionService.cotizar(
            this.alojamiento, this.llegada, this.salida, this.huespedes
        );
    }

    reservar(): void {
        if (!this.alojamiento || !this.cotizacion.valida) return;

        const borrador = {
            alojamiento: this.alojamiento,
            llegada: this.llegada,
            salida: this.salida,
            huespedes: this.huespedes
        };

        if (this.authService.estaAutenticado()) {
            this.router.navigate(["/reservas"], { state: borrador });
            return;
        }

        try {
            localStorage.setItem("reservaPendiente", JSON.stringify(borrador));
            this.router.navigate(["/iniciar-sesion"], {
                queryParams: { returnUrl: "/reservas" }
            });
        } catch (error) {
            console.error("No fue posible guardar la selección de reserva:", error);
            alert("No se pudo guardar la selección. Revisa el almacenamiento del navegador e inténtalo de nuevo.");
        }
    }

    ngOnInit() {
        const id = Number(this.ruta.snapshot.paramMap.get('id'));

        this.alojamientosService.getAlojamientoPorId(id).subscribe(a => {
            this.alojamiento = a;
            this.cargando = false;
            if (a) this.imagenActiva = a.imagenPrincipal;
            this.cdr.detectChanges();
        });

        this.alojamientosService.getResenas(id).subscribe(r => this.resenas = r);
        this.cdr.detectChanges();
    }
}
