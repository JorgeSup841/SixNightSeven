import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pregunta, PreguntasData } from '../models/preguntamodel';

@Injectable({ providedIn: 'root' })
export class Preguntasservice {

    private http = inject(HttpClient);

    private readonly URL = 'assets/data/Faq.json';

    getPreguntas(): Observable<Pregunta[]> {
        return this.http.get<PreguntasData>(this.URL).pipe(
            map(datos => datos.preguntas)
        );
    }
}