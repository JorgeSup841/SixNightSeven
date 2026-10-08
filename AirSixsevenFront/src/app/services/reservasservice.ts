import {Injectable, Service} from "@angular/core";
import {Reservasmodel} from "../models/reservasmodel";

@Injectable({providedIn: 'root'})
export class Reservasservice {

    private clave = 'reservas';
    private reservas: Reservasmodel[] = this.leer();

    private leer(): Reservasmodel[] {
        try {
            return JSON.parse(localStorage.getItem(this.clave) ?? '[]');
        } catch {
            return [];
        }
    }

    getReservas(): Reservasmodel[] {
        return [...this.reservas];
    }

    agregar(reserva: Reservasmodel) {
        this.reservas.push(reserva);
        localStorage.setItem(this.clave, JSON.stringify(this.reservas));
    }

    estaReservado(alojamientoId: number): boolean {
        return this.reservas.some(
            r => r.alojamientoId === alojamientoId && r.estado === 'CONFIRMADA'
        );
    }

<<<<<<< HEAD
    getReservaPorId(id: string): Reservasmodel | undefined {
        return this.reservas.find(r => r.id === id);
    }

=======
>>>>>>> origin/Juancho

}
