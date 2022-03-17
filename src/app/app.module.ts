import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import "@angular/common/locales/global/es";
import "@angular/common/locales/global/fr";


import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [

    {provide: LOCALE_ID, useValue: 'es'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
