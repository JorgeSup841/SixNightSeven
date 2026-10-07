import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import {
    Alojamiento,
    MarketplaceData
} from "../models/alojamientomodel";

@Injectable({
    providedIn: "root"
})
export class Alojamientosservice {

    private http = inject(HttpClient);

    private readonly URL_BASE = "assets/data/Marketplacedata.json";

    getAlojamientos(): Observable<Alojamiento[]> {

        return this.http
            .get<MarketplaceData>(this.URL_BASE)
            .pipe(
                map(datos =>
                    datos.alojamientos.filter(
                        alojamiento => alojamiento.activo
                    )
                )
            );

    }

    getAlojamientoPorId(
        id: number
    ): Observable<Alojamiento | undefined> {

        return this.getAlojamientos().pipe(

            map(alojamientos =>
                alojamientos.find(
                    alojamiento => alojamiento.id === id
                )
            )

        );

    }

}