import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";
import {Serviciociudadescomponent} from "./components/serviciociudadescomponent/serviciociudadescomponent";
import {Eventoscomponent} from "./components/eventoscomponent/eventoscomponent";
import {Confirmacionreservacomponent} from "./components/confirmacionreservacomponent/confirmacionreservacomponent";
import {Misreservascomponent} from "./components/misreservascomponent/misreservascomponent";


import {Pagarservicioscomponent} from "./components/pagarservicioscomponent/pagarservicioscomponent";

import {Detalleeventocomponent} from "./components/detalleeventocomponent/detalleeventocomponent";





const routes: Routes = [

    {
        path: "",
        component: Iniciocomponent
    },

    {
        path: "reservas/:id",
        component: Reservascomponent
    },

    {
        path: "alojamientos/:id",
        component: Detallealojamientocomponent
    },
    {
        path: "servicios",
        component:Serviciociudadescomponent
    },
    {
     path: 'pagar/:id', component: Pagarservicioscomponent
    },



    {
        path: "reservas/:id",
        component: Reservascomponent
    },

    {
        path:"eventos",

        component: Eventoscomponent
    },
    {
        path: "eventos",
        component: Eventoscomponent
    },
    {
        path: "eventos/:id",
        component: Detalleeventocomponent
    },

    {path: 'reserva-confirmada/:id', component: Confirmacionreservacomponent},
    {path: 'mis-reservas', component: Misreservascomponent},

    {
        path: "**",
        redirectTo: ""
    }



];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}