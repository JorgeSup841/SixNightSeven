import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Ciudadesservice } from "../../services/ciudadesservice";
import { Ciudad, Horario } from "../../models/ciudadesmodel";

@Component({
    selector: "app-pagarservicioscomponent",
    standalone: false,
    templateUrl: "./pagarservicioscomponent.html",
    styleUrl: "./pagarservicioscomponent.css"
})
export class Pagarservicioscomponent implements OnInit {

    private route = inject(ActivatedRoute);
    private ciudadesService = inject(Ciudadesservice);
    private cdr = inject(ChangeDetectorRef);

    servicio?: Ciudad;
    horarios: Horario[] = [];
    cargando = true;

    fecha = '';
    hoy = this.ciudadesService.hoy();
    horarioSeleccionado?: Horario;
    pagado = false;

    nombre = '';
    tarjeta = '';
    vencimiento = '';
    cvv = '';

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));

        this.ciudadesService.getTarjetaPorId(id).subscribe(servicio => {
            this.servicio = servicio;
            this.cargando = false;
            this.cdr.detectChanges();
        });

        this.ciudadesService.getHorarios(id).subscribe(horarios => {
            this.horarios = horarios;
            this.cdr.detectChanges();
        });
    }

    seleccionarHorario(horario: Horario) {
        this.horarioSeleccionado = horario;
        this.pagado = false;
    }

    private patrones = {
        numero: /[0-9]/,
        letra: /[a-zA-ZáéíóúÁÉÍÓÚñÑ ]/,
        fecha: /[0-9/]/
    };

    permitir(event: KeyboardEvent, tipo: 'numero' | 'letra' | 'fecha') {
        if (!this.patrones[tipo].test(event.key)) {
            event.preventDefault();
        }
    }

    get formularioCompleto(): boolean {
        return !!this.fecha
            && !!this.horarioSeleccionado
            && this.nombre.trim() !== ''
            && this.tarjeta.trim() !== ''
            && this.vencimiento.trim() !== ''
            && this.cvv.trim() !== '';
    }

    confirmar() {
        if (!this.formularioCompleto || this.fecha < this.hoy) {
            alert('Completa todos los campos');
            return;
        }
        this.pagado = true;
    }

}