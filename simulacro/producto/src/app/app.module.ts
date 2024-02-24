import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductolistComponent } from './components/productolist/productolist.component';
import { ProductonewComponent } from './components/productonew/productonew.component';
import { ProductodetailComponent } from './components/productodetail/productodetail.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ProductolistComponent,
    ProductonewComponent,
    ProductodetailComponent,
    PedidoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgIf,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
