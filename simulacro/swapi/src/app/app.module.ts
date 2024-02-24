import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwapiLisyComponent } from './components/swapi-lisy/swapi-lisy.component';
import { SwapiDetailComponent } from './components/swapi-detail/swapi-detail.component';
import { SwapiNewComponent } from './components/swapi-new/swapi-new.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import {HttpClientModule} from "@angular/common/http";
import {CurrencyPipe, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwapiLisyComponent,
    SwapiDetailComponent,
    SwapiNewComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    CurrencyPipe,
    NgIf,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
