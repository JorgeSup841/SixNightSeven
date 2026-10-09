import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ciudad } from '../models/ciudadesmodel';

@Injectable({
    providedIn: 'root'
})
export class Ciudadesservice {

    private http = inject(HttpClient);

    private readonly URL_BASE = 'assets/data/Serviciosciudades.json';

    getTarjetas(): Observable<Ciudad[]> {
        return this.http.get<Ciudad[]>(this.URL_BASE);
    }
}