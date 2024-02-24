import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SwapiLisyComponent} from "./components/swapi-lisy/swapi-lisy.component";
import {SwapiDetailComponent} from "./components/swapi-detail/swapi-detail.component";
import {SwapiNewComponent} from "./components/swapi-new/swapi-new.component";
import {PedidoComponent} from "./components/pedido/pedido.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"swapi/lisy",
    pathMatch:"full"
  },
  {
    path:"swapi/lisy",
    component:SwapiLisyComponent
  },{
    path:"swapi/detail/:name",
    component:SwapiDetailComponent
  },{
    path:"swapi/new",
    component:SwapiNewComponent
  },{
    path:"pedido",
    component:PedidoComponent
  },{
    path:"**",
    redirectTo:"swapi",
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
