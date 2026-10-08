import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {Iniciocomponent} from './components/iniciocomponent/iniciocomponent';
import {Reservascomponent} from './components/reservascomponent/reservascomponent';
import {Eventoscomponent} from "./components/eventoscomponent/eventoscomponent";





import {Detallealojamientocomponent} from "./components/detallealojamientocomponent/detallealojamientocomponent";



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
            path:"eventos",

        component: Eventoscomponent
        },


]
;

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