import {Component, OnInit, inject, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alojamiento } from '../../models/alojamientomodel';
import { Cotizacionmodel, Reservasmodel } from '../../models/reservasmodel';
import {Alojamientosservice} from "../../services/alojamientosservice";
import {Cotizacionservice} from "../../services/cotizacionservice";
import {Reservasservice} from "../../services/reservasservice";

@Component({
    selector: "app-reservascomponent",
    standalone: false,
    styleUrl: "./reservascomponent.css",
    templateUrl: "./reservascomponent.html",
})
export class Reservascomponent implements OnInit {
    private ruta = inject(ActivatedRoute);
    private router = inject(Router);
    private alojamientosService = inject(Alojamientosservice);
    private cotizacionService = inject(Cotizacionservice);
    private reservasService = inject(Reservasservice);
    cdr = inject(ChangeDetectorRef);


    alojamiento?: Alojamiento;
    cargando = true;
    hoy = this.cotizacionService.hoy();

    nombre = "";
    correo = "";
    telefono = "";
    cedula = "";

    fechaLlegada = "";
    fechaSalida = "";
    numeroHuespedes = 1;

    cotizacion: Cotizacionmodel = {
        valida: false, errores: [], noches: 0, subtotal: 0,
        tarifaLimpieza: 0, tarifaServicio: 0, total: 0
    };

    esNombreValido = false;
    nombreError = "";

    esCorreoValido = false;
    correoError = "";

    esTelefonoValido = false;
    telefonoError = "";

    esCedulaValida = false;
    cedulaError = "";

    ngOnInit() {
        const id = Number(this.ruta.snapshot.paramMap.get('id'));
        const q = this.ruta.snapshot.queryParamMap;

        this.fechaLlegada = q.get('llegada') ?? '';
        this.fechaSalida = q.get('salida') ?? '';
        this.numeroHuespedes = Number(q.get('huespedes')) || 1;

        this.alojamientosService.getAlojamientoPorId(id).subscribe(a => {
            this.alojamiento = a;
            this.cargando = false;
            this.calcularReserva();
            this.cdr.detectChanges();
        });
        this.cdr.detectChanges();
    }

    calcularReserva() {
        if (!this.alojamiento) return;
        this.cotizacion = this.cotizacionService.cotizar(
            this.alojamiento, this.fechaLlegada, this.fechaSalida, this.numeroHuespedes
        );
    }

    verificarNombre(valor: string) {
        this.nombre = valor.trim();
        this.esNombreValido = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,}$/.test(this.nombre);
        this.nombreError = this.esNombreValido || valor === ""
            ? "" : "Solo letras, mínimo 3 caracteres.";
    }

    verificarCorreo(valor: string) {
        this.correo = valor.trim();
        this.esCorreoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
        this.correoError = this.esCorreoValido || valor === ""
            ? "" : "Escribe un correo válido.";
    }

    verificarTelefono(valor: string) {
        this.telefono = valor.trim();
        this.esTelefonoValido = /^\+?[0-9 ]{7,15}$/.test(this.telefono);
        this.telefonoError = this.esTelefonoValido || valor === ""
            ? "" : "Solo números, con + opcional al inicio.";
    }

    verificarCedula(valor: string) {
        this.cedula = valor.trim();
        this.esCedulaValida = /^[0-9]{6,12}$/.test(this.cedula);
        this.cedulaError = this.esCedulaValida || valor === ""
            ? "" : "Solo números, entre 6 y 12 dígitos.";
    }

    get formularioValido(): boolean {
        return this.esNombreValido && this.esCorreoValido &&
            this.esTelefonoValido && this.esCedulaValida &&
            this.cotizacion.valida;
    }

    confirmar() {
        if (!this.alojamiento || !this.formularioValido) return;

        const reserva: Reservasmodel = {
            id: 'RES-' + Date.now(),
            alojamientoId: this.alojamiento.id,
            alojamientoNombre: this.alojamiento.nombre,
            ciudad: this.alojamiento.ciudad,
            imagen: this.alojamiento.imagenPrincipal,
            fechaLlegada: this.fechaLlegada,
            fechaSalida: this.fechaSalida,
            huespedes: this.numeroHuespedes,
            noches: this.cotizacion.noches,
            total: this.cotizacion.total,
            nombreHuesped: this.nombre,
            correo: this.correo,
            estado: 'CONFIRMADA'
        };

        this.reservasService.agregar(reserva);
        this.router.navigate(['/mis-reservas']);
    }
}