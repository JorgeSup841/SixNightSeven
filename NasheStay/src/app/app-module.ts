import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contentcomponent } from './components/contentcomponent/contentcomponent';
import { Navbarcomponent } from './components/navbarcomponent/navbarcomponent';
import { Footercomponent } from './components/footercomponent/footercomponent';

@NgModule({
  declarations: [App, Contentcomponent, Navbarcomponent, Footercomponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
