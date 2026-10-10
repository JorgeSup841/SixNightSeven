import { ChangeDetectorRef, Component, Input, OnInit, inject } from "@angular/core";
import { Alojamiento } from "../../models/alojamientomodel";
import { ClimaService } from "../../services/climaservice";

@Component({
    selector: "app-tarjetaalojamientocomponent",
    standalone: false,
    styleUrl: "./tarjetaalojamientocomponent.css",
    templateUrl: "./tarjetaalojamientocomponent.html",
})
export class Tarjetaalojamientocomponent implements OnInit {

    @Input({ required: true }) alojamiento!: Alojamiento;

    favorito = false;

    temperatura: number | null = null;

    private climaService = inject(ClimaService);
    private cdr = inject(ChangeDetectorRef);

    ngOnInit(): void {
        this.climaService
            .obtenerClima(this.alojamiento.latitud, this.alojamiento.longitud)
            .subscribe((respuesta: any) => {
                this.temperatura = respuesta.current.temperature_2m;
                this.cdr.detectChanges();
            });
    }

    alternarFavorito() {
        this.favorito = !this.favorito;
    }
}