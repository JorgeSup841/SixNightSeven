import {Injectable} from "@angular/core";
import {Cotizacionmodel} from "../models/reservasmodel";
import {Alojamiento} from "../models/alojamientomodel";


@Injectable({providedIn: 'root'})
export class Cotizacionservice {


    hoy(): string {
        const date = new Date();
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const dia = String(date.getDate()).padStart(2, '0');
        return `${date.getFullYear()}-${mes}-${dia}`;
    }

    cotizar(alojamiento: Alojamiento, llegada: string, salida: string, huespedes: number): Cotizacionmodel {
        const errores: string[] = [];

        if (!llegada || !salida) {
            errores.push('Seleccione la fecha de llegada y la fecha de salida.');
        } else {
            if (llegada < this.hoy()) {
                errores.push('La fecha de llegada no puede ser anterior a hoy.');
            }
            if (salida <= llegada) {
                errores.push('La fecha de salida debe ser posterior a la de llegada.');
            }
        }

        if (!huespedes || huespedes < 1) {
            errores.push('Debe haber al menos un huésped.');
        } else if (huespedes > alojamiento.capacidad) {
            errores.push(`Este alojamiento admite máximo ${alojamiento.capacidad} huéspedes.`);
        }

        if (alojamiento.precioNoche <= 0) errores.push('El precio por noche no es válido.');

        const valida = errores.length === 0;
        const noches = valida
            ? Math.round((new Date(salida).getTime() - new Date(llegada).getTime()) / 86400000)
            : 0;

        const subtotal = noches * alojamiento.precioNoche;
        const tarifaLimpieza = valida ? alojamiento.tarifaLimpieza : 0;
        const tarifaServicio = subtotal * 0.10;

        return {
            valida, errores, noches, subtotal, tarifaLimpieza, tarifaServicio,
            total: subtotal + tarifaLimpieza + tarifaServicio
        };
    }
}


