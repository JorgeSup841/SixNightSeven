import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ciudadesservice } from '../../services/ciudadesservice';
import { Ciudad } from '../../models/ciudadesmodel';

@Component({
    selector: 'app-pagarservicioscomponent',
    standalone: false,
    templateUrl: './pagarservicioscomponent.html',
    styleUrl: './pagarservicioscomponent.css'
})
export class Pagarservicioscomponent implements OnInit {

    private route = inject(ActivatedRoute);
    private ciudadesService = inject(Ciudadesservice);
    cdr = inject(ChangeDetectorRef)

    servicio?: Ciudad;

    fecha = '';
    hoy = new Date().toISOString().split('T')[0];

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));


        this.ciudadesService.getTarjetaPorId(id).subscribe(dato => {
            this.servicio = dato;
            this.cdr.detectChanges();

        });

    }

    confirmar(): void {
        alert(`Pago confirmado para el ${this.fecha}`);
    }

}
