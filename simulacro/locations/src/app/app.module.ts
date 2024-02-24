import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { LocationsDetailComponent } from './components/locations-detail/locations-detail.component';
import { LocationsNewComponent } from './components/locations-new/locations-new.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LocationsListComponent,
    LocationsDetailComponent,
    LocationsNewComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
