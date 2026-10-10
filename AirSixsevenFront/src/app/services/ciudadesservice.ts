import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Ciudad, CiudadData, Horario } from '../models/ciudadesmodel';

@Injectable({
    providedIn: 'root'
})
export class Ciudadesservice {

    private http = inject(HttpClient);

    private readonly URL_BASE = 'assets/data/Serviciosciudades.json';

    getTarjetas(): Observable<Ciudad[]> {
        return this.http.get<CiudadData>(this.URL_BASE).pipe(
            map(datos => datos.servicios)
        );
    }

    getTarjetaPorId(id: number): Observable<Ciudad | undefined> {
        return this.getTarjetas().pipe(
            map(lista => lista.find(t => t.id === id))
        );
    }

    getHorarios(servicioId: number): Observable<Horario[]> {
        return this.http.get<CiudadData>(this.URL_BASE).pipe(
            map(datos => datos.horarios.filter(h => h.servicioId === servicioId))
        );
    }

    hoy(): string {
        const date = new Date();
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const dia = String(date.getDate()).padStart(2, '0');
        return `${date.getFullYear()}-${mes}-${dia}`;
    }
}