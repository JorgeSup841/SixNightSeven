import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Alojamiento, MarketplaceData } from '../models/alojamientomodel';

@Injectable({
    providedIn: 'root'
})
export class Alojamientosservice {

    private http = inject(HttpClient);

    private readonly URL_BASE = 'assets/data/Marketplacedata.json';

    getAlojamientos(): Observable<Alojamiento[]> {

        return this.http.get<MarketplaceData>(this.URL_BASE).pipe(
            map(datos => datos.alojamientos.filter(a => a.activo))
        );

    }
}