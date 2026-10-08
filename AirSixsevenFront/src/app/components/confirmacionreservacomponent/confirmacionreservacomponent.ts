import {Component, inject} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Reservasservice} from "../../services/reservasservice";
import {Reservasmodel} from "../../models/reservasmodel";

@Component({
  selector: "app-confirmacionreservacomponent",
  standalone: false,
  styleUrl: "./confirmacionreservacomponent.css",
  templateUrl: "./confirmacionreservacomponent.html",
})
export class Confirmacionreservacomponent {

  private ruta = inject(ActivatedRoute);
  private reservasService = inject(Reservasservice);

  reserva?: Reservasmodel;

  ngOnInit() {
    const id = this.ruta.snapshot.paramMap.get('id') ?? '';
    this.reserva = this.reservasService.getReservaPorId(id);
  }
}
