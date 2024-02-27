import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {Vino2listComponent} from "./components/vino2list/vino2list.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:'inicio',
    pathMatch:"full"
  },
  {
    path:'inicio',
    component:InicioComponent
  }, {
    path:'vino2list',
    component:Vino2listComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
