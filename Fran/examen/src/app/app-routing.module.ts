import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VinoListComponent} from "./components/vino-list/vino-list.component";
import {VinoNewComponent} from "./components/vino-new/vino-new.component";
import {VinoDetailComponent} from "./components/vino-detail/vino-detail.component";
import {PedidoComponent} from "./components/pedido/pedido.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:'vino/list',
    pathMatch:'full'
  },
  {
    path:"vino/list",
   component: VinoListComponent
  },
  {
    path:"vino/new",
    component: VinoNewComponent
  },
  {
    path:"vino/detail:id",
    component: VinoDetailComponent
  },
  {
    path:"pedido",
    component: PedidoComponent
  },
  {
    path:"**",
    redirectTo:'vino-list',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
