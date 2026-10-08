import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Alojamientocomponent } from "./components/alojamientocomponent/alojamientocomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { Eventoscomponent } from "./components/eventoscomponent/eventoscomponent";

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
        path: "eventos",
        component: Eventoscomponent
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