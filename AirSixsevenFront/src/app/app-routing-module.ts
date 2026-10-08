import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";
import {Serviciociudadescomponent} from "./components/serviciociudadescomponent/serviciociudadescomponent";

const routes: Routes = [

    {
        path: "",
        component: Iniciocomponent
    },

    {
        path: "reservas",
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
export class AppRoutingModule {}