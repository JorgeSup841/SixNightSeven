import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Navbarcomponent } from './components/navbarcomponent/navbarcomponent';
import { Barrabusquedacomponente } from './components/barrabusquedacomponente/barrabusquedacomponente';
import { Iniciocomponent } from './components/iniciocomponent/iniciocomponent';
import { Destacadoscomponent } from './components/destacadoscomponent/destacadoscomponent';
import { Tarjetaalojamientocomponent } from './components/tarjetaalojamientocomponent/tarjetaalojamientocomponent';
import { Reservascomponent } from './components/reservascomponent/reservascomponent';

@NgModule({
    declarations: [
        App,
        Navbarcomponent,
        Barrabusquedacomponente,
        Iniciocomponent,
        Destacadoscomponent,
        Tarjetaalojamientocomponent,
        Reservascomponent
    ],

    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],

    providers: [
        provideBrowserGlobalErrorListeners()
    ],

    bootstrap: [
        App
    ]
})
export class AppModule {}