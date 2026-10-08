import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";

import { Navbarcomponent } from "./components/navbarcomponent/navbarcomponent";
import { Barrabusquedacomponente } from "./components/barrabusquedacomponente/barrabusquedacomponente";
import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Destacadoscomponent } from "./components/destacadoscomponent/destacadoscomponent";
import { Tarjetaalojamientocomponent } from "./components/tarjetaalojamientocomponent/tarjetaalojamientocomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { Footercomponent } from "./components/footercomponent/footercomponent";
import { Confianzacomponent } from "./components/confianzacomponent/confianzacomponent";
import { Cierrecomponent } from "./components/cierrecomponent/cierrecomponent";
import { Escenciacomponent } from "./components/escenciacomponent/escenciacomponent";
import { Serviciociudadescomponent } from "./components/serviciociudadescomponent/serviciociudadescomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";
import { Alojamientocomponent } from "./components/alojamientocomponent/alojamientocomponent";
import { Confirmacionreservacomponent } from "./components/confirmacionreservacomponent/confirmacionreservacomponent";
import { Misreservascomponent } from "./components/misreservascomponent/misreservascomponent";


@NgModule({
    declarations: [
        App,
        Navbarcomponent,
        Barrabusquedacomponente,
        Iniciocomponent,
        Destacadoscomponent,
        Tarjetaalojamientocomponent,
        Reservascomponent,
        Footercomponent,
        Confianzacomponent,
        Cierrecomponent,
        Escenciacomponent,
        Serviciociudadescomponent,
        Detallealojamientocomponent
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