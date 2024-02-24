import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductolistComponent} from "./components/productolist/productolist.component";
import {ProductodetailComponent} from "./components/productodetail/productodetail.component";
import {ProductonewComponent} from "./components/productonew/productonew.component";
import {PedidoComponent} from "./components/pedido/pedido.component";
import {InicioComponent} from "./components/inicio/inicio.component";



const routes: Routes = [
  {
    path:"",
    redirectTo: "inicio",
    pathMatch: "full"
  },
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"productolist",
    component:ProductolistComponent
  },{
    path:"productodetail/:id",
    component:ProductodetailComponent
  },{
    path:"productonew",
    component:ProductonewComponent
  },{
    path:"pedido",
    component:PedidoComponent
  },
  {
    path:"**",
    redirectTo: "inicio",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
