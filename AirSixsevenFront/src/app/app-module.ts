<<<<<<< Updated upstream
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbarcomponent } from './components/navbarcomponent/navbarcomponent';
import { Barrabusquedacomponente } from './components/barrabusquedacomponente/barrabusquedacomponente';

@NgModule({
  declarations: [App, Navbarcomponent, Barrabusquedacomponente],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
=======
import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { Navbarcomponent } from "./components/navbarcomponent/navbarcomponent";
import { Barrabusquedacomponente } from "./components/barrabusquedacomponente/barrabusquedacomponente";
import { Iniciocomponent } from "./components/iniciocomponent/iniciocomponent";
import { Tarjetaalojamientocomponent } from "./components/tarjetaalojamientocomponent/tarjetaalojamientocomponent";
import { Destacadoscomponent } from "./components/destacadoscomponent/destacadoscomponent";
import { Reservascomponent } from "./components/reservascomponent/reservascomponent";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        App,
        Navbarcomponent,
        Barrabusquedacomponente,
        Iniciocomponent,
        Tarjetaalojamientocomponent,
        Destacadoscomponent,
        Reservascomponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [provideBrowserGlobalErrorListeners()],
    bootstrap: [App],
>>>>>>> Stashed changes
})
export class AppModule {}