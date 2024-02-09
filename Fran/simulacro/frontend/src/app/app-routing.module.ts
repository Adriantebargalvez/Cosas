import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo: 'inicio'},
  {path:'inicio',component:MovieListComponent},
  {path:'**',pathMatch:"full",redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
