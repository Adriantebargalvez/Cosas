import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationsListComponent} from "./components/locations-list/locations-list.component";
import {LocationsNewComponent} from "./components/locations-new/locations-new.component";
import {LocationsDetailComponent} from "./components/locations-detail/locations-detail.component";
import {PedidoComponent} from "./components/pedido/pedido.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'locations/list',
    pathMatch:'full'
  },
  {
    path:'locations/list',
    component:LocationsListComponent
  },
  {
    path:'locations/new',
    component:LocationsNewComponent
  },
  {
    path:'locations/detail/:id',
    component:LocationsDetailComponent
  },
  {
    path:'pedido',
    component:PedidoComponent
  },
  {
    path:'**',
    redirectTo:'locations',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
