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
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import { Footercomponent } from "./components/footercomponent/footercomponent";
import { Confianzacomponent } from "./components/confianzacomponent/confianzacomponent";
import { Cierrecomponent } from "./components/cierrecomponent/cierrecomponent";
<<<<<<< HEAD
import { Eventoscomponent } from "./components/eventoscomponent/eventoscomponent";
=======
>>>>>>> 73665d7 (sixseven)
import { Escenciacomponent } from "./components/escenciacomponent/escenciacomponent";
import { Serviciociudadescomponent } from "./components/serviciociudadescomponent/serviciociudadescomponent";
import { Detallealojamientocomponent } from "./components/detallealojamientocomponent/detallealojamientocomponent";
<<<<<<< HEAD
import { Alojamientocomponent } from "./components/alojamientocomponent/alojamientocomponent";
=======
import {CommonModule} from "@angular/common";
>>>>>>> 3dcfa2b (feat: Implement dynamic accommodation detail and booking flow)

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
    Eventoscomponent,
    Escenciacomponent,
    Serviciociudadescomponent,
<<<<<<< HEAD
<<<<<<< HEAD
    Detallealojamientocomponent,
      Alojamientocomponent ,
  ],

  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],

  providers: [provideBrowserGlobalErrorListeners()],

  bootstrap: [App],
=======
    Detallealojamientocomponent
=======
    Detallealojamientocomponent,

>>>>>>> 3dcfa2b (feat: Implement dynamic accommodation detail and booking flow)
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],

  providers: [
    provideBrowserGlobalErrorListeners()
  ],

  bootstrap: [
    App
  ]
>>>>>>> 73665d7 (sixseven)
})
export class AppModule {}