import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ClimaService {
    private url = 'https://api.open-meteo.com/v1/forecast';

    constructor(private http: HttpClient) {
    }

    obtenerClima(latitud: number, longitud: number): Observable<any> {
        return this.http.get(this.url + '?latitude=' + latitud + '&longitude=' + longitud + '&current=temperature_2m');    }
}