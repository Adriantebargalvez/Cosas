import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {CalientesComponent} from "./components/calientes/calientes.component";
import {FriosComponent} from "./components/frios/frios.component";
import {OperadoresComponent} from "./components/operadores/operadores.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'frios',
    component: FriosComponent

  },
  {
    path:'calientes',
    component: CalientesComponent
  },
    {
        path:'operadores',
        component: OperadoresComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
