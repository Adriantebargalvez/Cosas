import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalzadoListComponent} from "./components/calzado-list/calzado-list.component";
import {CalzadoNewComponent} from "./components/calzado-new/calzado-new.component";
import {CalzadoDetailComponent} from "./components/calzado-detail/calzado-detail.component";
import {PedidoComponent} from "./components/pedido/pedido.component";

const routes: Routes = [
  //PRIMERO
  {
    path:'',
    redirectTo:'calzado/list',
    pathMatch: 'full'
  },
  {
    path:'calzado/list',
    component: CalzadoListComponent
  },
  {
    path:'calzado/new',
    component: CalzadoNewComponent
  },
  {
    path:'calzado/detail/:id',
    component: CalzadoDetailComponent
  },
  {
    path:'pedido',
    component: PedidoComponent
  },
  {
  path:'**',
  redirectTo:'calzado',
  pathMatch: 'full'
}
  //PRIMERO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
