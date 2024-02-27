import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {VinolistComponent} from "./components/vinolist/vinolist.component";
import {VinonewComponent} from "./components/vinonew/vinonew.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"inicio",
    pathMatch:"full"
  },
  {
    path:"inicio",
    component:InicioComponent
  },{
    path:"vinolist",
    component:VinolistComponent
  },{
    path:"vinonew",
    component:VinonewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
