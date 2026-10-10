import {Component} from "@angular/core";

@Component({
    selector: "app-barrabusquedacomponente",
    standalone: false,
    styleUrl: "./barrabusquedacomponente.css",
    templateUrl: "./barrabusquedacomponente.html"
})
export class Barrabusquedacomponente {

    destino: string = "";

    llegada: string = "";

    salida: string = "";

    huespedes: number = 1;

}