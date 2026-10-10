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
    }

    confirmar() {
        if (!this.fecha || this.fecha < this.hoy || !this.horarioSeleccionado) {
            alert('Elige una fecha y una hora');
            return;
        }

    }
}