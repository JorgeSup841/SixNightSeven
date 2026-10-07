import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";

import { Navbarcomponent } from "./components/navbarcomponent/navbarcomponent";
import { Barrabusquedacomponente } from "./components/barrabusquedacomponente/barrabusquedacomponente";
import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Destacadoscomponent } from "./components/destacadoscomponent/destacadoscomponent";
import { Tarjetaalojamientocomponent } from "./components/tarjetaalojamientocomponent/tarjetaalojamientocomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { FormsModule } from "@angular/forms";
import { Serviciociudadescomponent } from "./components/serviciociudadescomponent/serviciociudadescomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";

@NgModule({
  declarations: [
    App,
    Navbarcomponent,
    Barrabusquedacomponente,
    Iniciocomponent,
    Destacadoscomponent,
    Tarjetaalojamientocomponent,
    Reservascomponent,
    Serviciociudadescomponent,
  ],

  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
    Detallealojamientocomponent,
  ],

  imports: [BrowserModule, HttpClientModule, AppRoutingModule],

  providers: [provideBrowserGlobalErrorListeners()],

  bootstrap: [App],
})
export class AppModule {}
