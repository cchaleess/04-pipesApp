import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Modulos personalizados
import {AppRouterModule} from './app-router.module';
import {SharedModule} from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


import { AppComponent } from './app.component';
import {PrimeNgModule} from './prime-ng/prime-ng.module';

//Cambiar el locale de la app
import localeES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
