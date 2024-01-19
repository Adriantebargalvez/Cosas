import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FriosComponent } from './components/frios/frios.component';
import { CalientesComponent } from './components/calientes/calientes.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { OperadoresComponent } from './components/operadores/operadores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FriosComponent,
    CalientesComponent,
    OperadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
