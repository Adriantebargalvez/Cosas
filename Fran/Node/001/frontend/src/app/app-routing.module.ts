import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JuguetesListComponent} from "./componentes/juguetes-list/juguetes-list.component";

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'inicio'},
  {path:'inicio',component:JuguetesListComponent},
  {path:'**',pathMatch:"full",redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
