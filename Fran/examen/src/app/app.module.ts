import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VinoListComponent } from './components/vino-list/vino-list.component';
import { VinoDetailComponent } from './components/vino-detail/vino-detail.component';
import { VinoNewComponent } from './components/vino-new/vino-new.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import {HttpClientModule} from "@angular/common/http";
import {MongooseModule} from "@nestjs/mongoose";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VinoListComponent,
    VinoDetailComponent,
    VinoNewComponent,
    PedidoComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
