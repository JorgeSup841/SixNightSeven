import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Evento, EventosData, Horario } from '../models/eventomodel';

@Injectable({
    providedIn: 'root'
})
export class Eventosservice {

    private http = inject(HttpClient);

    private readonly URL_BASE = 'assets/data/Eventosdata.json';

    getEventos(): Observable<Evento[]> {

        return this.http.get<EventosData>(this.URL_BASE).pipe(
            map(datos => datos.eventos.filter(e => e.activo))
        );

    }

    getEventoPorId(id: number): Observable<Evento | undefined> {

        return this.getEventos().pipe(
            map(eventos => eventos.find(e => e.id === id))
        );

    }

    getHorarios(eventoId: number): Observable<Horario[]> {

        return this.http.get<EventosData>(this.URL_BASE).pipe(
            map(datos => datos.horarios.filter(h => h.eventoId === eventoId))
        );

    }
}