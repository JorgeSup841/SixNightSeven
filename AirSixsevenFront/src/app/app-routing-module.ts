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
<<<<<<< HEAD
        path: "alojamientos",
        component: Alojamientocomponent
=======
        path: "reservas/:id",
        component: Reservascomponent
>>>>>>> 3dcfa2b (feat: Implement dynamic accommodation detail and booking flow)
    },

    {
        path: "alojamientos/:id",
        component: Detallealojamientocomponent
    },

    {
        path: "reservas",
        component: Reservascomponent
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