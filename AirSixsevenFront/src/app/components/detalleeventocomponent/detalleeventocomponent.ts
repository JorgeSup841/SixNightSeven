import {ChangeDetectorRef, Component, inject} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Evento, Horario} from "../../models/eventomodel";
import {Eventosservice} from "../../services/eventosservice";

@Component({
    selector: "app-detalleeventocomponent",
    standalone: false,
    styleUrl: "./detalleeventocomponent.css",
    templateUrl: "./detalleeventocomponent.html",
})
export class Detalleeventocomponent {

    private ruta = inject(ActivatedRoute);
    private eventosService = inject(Eventosservice);
    cdr = inject(ChangeDetectorRef);

    evento?: Evento;
    horarios: Horario[] = [];
    cargando = true;
    fechaSeleccionada = '';
    horarioSeleccionado?: Horario;

    ngOnInit() {
        const id = Number(this.ruta.snapshot.paramMap.get('id'));

        this.eventosService.getEventoPorId(id).subscribe(evento => {
            this.evento = evento;
            this.cargando = false;
            this.cdr.detectChanges();
        });

        this.eventosService.getHorarios(id).subscribe(horarios => {
            this.horarios = horarios;
            this.cdr.detectChanges();
        });
    }

    get fechas(): string[] {
        return [...new Set(this.horarios.map(h => h.fecha))].sort();
    }

    get horariosDelDia(): Horario[] {
        return this.horarios
            .filter(h => h.fecha === this.fechaSeleccionada)
            .sort((a, b) => a.hora.localeCompare(b.hora));
    }

    seleccionarFecha(fecha: string) {
        this.fechaSeleccionada = fecha;
        this.horarioSeleccionado = undefined;
    }

    seleccionarHorario(horario: Horario) {
        this.horarioSeleccionado = horario;
    }

    formatearFecha(fecha: string): string {
        const fechaObj = new Date(fecha + 'T00:00:00');
        const formatoFecha = fechaObj.toLocaleDateString('es-CO', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });
        return formatoFecha.charAt(0).toUpperCase() + formatoFecha.slice(1);
    }

    pagoExitoso = false;

    realizarPago() {
        this.pagoExitoso = true;
    }
}