import { Component, OnInit } from "@angular/core";

import { Alojamiento } from "../../models/alojamientomodel";

@Component({
  selector: "app-detallealojamientocomponent",
  standalone: false,
  styleUrl: "./detallealojamientocomponent.css",
  templateUrl: "./detallealojamientocomponent.html"
})
export class Detallealojamientocomponent implements OnInit {

  alojamiento!: Alojamiento;

  cargando: boolean = true;

  ngOnInit(): void {

    const estado = history.state;

    console.log("Estado recibido:", estado);

    if (estado && estado.alojamiento) {

      this.alojamiento = estado.alojamiento;
      this.cargando = false;

      console.log(
          "Alojamiento recibido:",
          this.alojamiento
      );

    } else {

      this.cargando = false;

      console.error(
          "No se recibió ningún alojamiento"
      );

    }

  }

}