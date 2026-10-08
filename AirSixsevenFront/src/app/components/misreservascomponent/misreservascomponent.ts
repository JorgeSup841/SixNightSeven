import {Component, inject} from "@angular/core";
import {Reservasservice} from "../../services/reservasservice";
import {Reservasmodel} from "../../models/reservasmodel";

@Component({
  selector: "app-misreservascomponent",
  standalone: false,
  styleUrl: "./misreservascomponent.css",
  templateUrl: "./misreservascomponent.html",
})
export class Misreservascomponent {
  private reservasService = inject(Reservasservice);

  reservas: Reservasmodel[] = [];

  ngOnInit() {
    this.reservas = this.reservasService.getReservas().reverse();
  }

}
