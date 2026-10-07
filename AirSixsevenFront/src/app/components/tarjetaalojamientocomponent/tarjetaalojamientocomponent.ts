import { Component, Input } from "@angular/core";
import { Alojamiento } from "../../models/alojamientomodel";

@Component({
  selector: "app-tarjetaalojamientocomponent",
  standalone: false,
  styleUrl: "./tarjetaalojamientocomponent.css",
  templateUrl: "./tarjetaalojamientocomponent.html",
})
export class Tarjetaalojamientocomponent {

  @Input({ required: true }) alojamiento!: Alojamiento;

  favorito = false;

  alternarFavorito() {
    this.favorito = !this.favorito;
  }
}