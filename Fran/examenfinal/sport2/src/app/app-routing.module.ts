import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {SportDetailComponent} from "./components/sport-detail/sport-detail.component";
import {SportListComponent} from "./components/sport-list/sport-list.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },{
    path:'sportList',
    component:SportListComponent
  },{
    path:'sportDetail/:id',
    component:SportDetailComponent
  },
  {
    path:"**",
    redirectTo:'inicio',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
