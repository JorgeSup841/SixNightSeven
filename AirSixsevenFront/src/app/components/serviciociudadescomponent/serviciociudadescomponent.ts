import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Ciudadesservice } from '../../services/ciudadesservice';
import { Ciudad } from '../../models/ciudadesmodel';

@Component({
    selector: 'app-serviciociudadescomponent',
    standalone: false,
    templateUrl: './serviciociudadescomponent.html',
    styleUrl: './serviciociudadescomponent.css'
})
export class Serviciociudadescomponent {

    private ciudadesService = inject(Ciudadesservice);

    private tarjetas = toSignal(this.ciudadesService.getTarjetas(), {
        initialValue: [] as Ciudad[]
    });

    ciudades = computed(() => {
        const grupos = new Map<string, Ciudad[]>();

        for (const t of this.tarjetas()) {
            grupos.set(t.ciudad, [...(grupos.get(t.ciudad) ?? []), t]);
        }

        return Array.from(grupos, ([nombre, servicios]) => ({ nombre, servicios }));
    });
}