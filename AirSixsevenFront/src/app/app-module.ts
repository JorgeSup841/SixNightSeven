import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";

import { Navbarcomponent } from "./components/navbarcomponent/navbarcomponent";
import { Barrabusquedacomponente } from "./components/barrabusquedacomponente/barrabusquedacomponente";
import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Destacadoscomponent } from "./components/destacadoscomponent/destacadoscomponent";
import { Tarjetaalojamientocomponent } from "./components/tarjetaalojamientocomponent/tarjetaalojamientocomponent";
import { Alojamientocomponent } from "./components/alojamientocomponent/alojamientocomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { Confirmacionreservacomponent } from "./components/confirmacionreservacomponent/confirmacionreservacomponent";
import { Misreservascomponent } from "./components/misreservascomponent/misreservascomponent";
import { Footercomponent } from "./components/footercomponent/footercomponent";
import { Confianzacomponent } from "./components/confianzacomponent/confianzacomponent";
import { Cierrecomponent } from "./components/cierrecomponent/cierrecomponent";
import { Eventoscomponent } from "./components/eventoscomponent/eventoscomponent";
import { Detalleeventocomponent } from "./components/detalleeventocomponent/detalleeventocomponent";
import { Escenciacomponent } from "./components/escenciacomponent/escenciacomponent";
import { Serviciociudadescomponent } from "./components/serviciociudadescomponent/serviciociudadescomponent";
import { Pagarservicioscomponent } from "./components/pagarservicioscomponent/pagarservicioscomponent";
import { Iniciosesioncomponent } from "./components/iniciosesioncomponent/iniciosesioncomponent";
import { Crearcuentacomponent } from "./components/crearcuentacomponent/crearcuentacomponent";

@NgModule({
    declarations: [
        App,
        Navbarcomponent,
        Barrabusquedacomponente,
        Iniciocomponent,
        Destacadoscomponent,
        Tarjetaalojamientocomponent,
        Alojamientocomponent,
        Detallealojamientocomponent,
        Reservascomponent,
        Confirmacionreservacomponent,
        Misreservascomponent,
        Footercomponent,
        Confianzacomponent,
        Cierrecomponent,
        Eventoscomponent,
        Detalleeventocomponent,
        Escenciacomponent,
        Serviciociudadescomponent,
        Pagarservicioscomponent,
        Iniciosesioncomponent,
        Crearcuentacomponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        provideBrowserGlobalErrorListeners()
    ],
    bootstrap: [
        App
    ]
})
export class AppModule {}