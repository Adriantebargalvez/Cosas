import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { JuguetesListComponent } from './componentes/juguetes-list/juguetes-list.component';
import { NavegationComponent } from './componentes/navegation/navegation.component';

@NgModule({
  declarations: [
    AppComponent,
    JuguetesListComponent,
    NavegationComponent
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
