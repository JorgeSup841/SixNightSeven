import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Alojamientocomponent } from "./components/alojamientocomponent/alojamientocomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { Confirmacionreservacomponent } from "./components/confirmacionreservacomponent/confirmacionreservacomponent";
import { Misreservascomponent } from "./components/misreservascomponent/misreservascomponent";
import { Eventoscomponent } from "./components/eventoscomponent/eventoscomponent";
import { Detalleeventocomponent } from "./components/detalleeventocomponent/detalleeventocomponent";
import { Serviciociudadescomponent } from "./components/serviciociudadescomponent/serviciociudadescomponent";
import { Pagarservicioscomponent } from "./components/pagarservicioscomponent/pagarservicioscomponent";
import { Iniciosesioncomponent } from "./components/iniciosesioncomponent/iniciosesioncomponent";
import { Crearcuentacomponent } from "./components/crearcuentacomponent/crearcuentacomponent";

const routes: Routes = [
    {
        path: "",
        component: Iniciocomponent,
        pathMatch: "full"
    },
    {
        path: "alojamientos",
        component: Alojamientocomponent
    },
    {
        path: "alojamientos/:id",
        component: Detallealojamientocomponent
    },
    {
        path: "iniciar-sesion",
        component: Iniciosesioncomponent
    },
    {
        path: "crear-cuenta",
        component: Crearcuentacomponent
    },
    {
        path: "reservas",
        component: Reservascomponent
    },
    {
        path: "reserva-confirmada/:id",
        component: Confirmacionreservacomponent
    },
    {
        path: "mis-reservas",
        component: Misreservascomponent
    },
    {
        path: "eventos",
        component: Eventoscomponent
    },
<<<<<<< HEAD
    {
        path: "eventos/:id",
        component: Detalleeventocomponent
    },
    {
        path: "servicios",
        component: Serviciociudadescomponent
    },
    {
        path: "servicios/:id",
        component: Pagarservicioscomponent
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