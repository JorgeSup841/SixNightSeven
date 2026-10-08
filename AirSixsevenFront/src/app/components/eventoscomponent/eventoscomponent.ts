import {ChangeDetectorRef, Component, inject} from "@angular/core";
import {Evento} from "../../models/eventomodel";
import {Eventosservice} from "../../services/eventosservice";

@Component({
    selector: "app-eventoscomponent",
    standalone: false,
    styleUrl: "./eventoscomponent.css",
    templateUrl: "./eventoscomponent.html",
})
export class Eventoscomponent {

    private eventosService = inject(Eventosservice);
    cdr = inject(ChangeDetectorRef);

    eventos: Evento[] = [];

    ngOnInit() {
        this.eventosService.getEventos().subscribe(datos => {
            this.eventos = datos;
            this.cdr.detectChanges();
        });
    }
}