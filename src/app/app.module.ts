import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import "@angular/common/locales/global/es";
import "@angular/common/locales/global/fr";


import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
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
