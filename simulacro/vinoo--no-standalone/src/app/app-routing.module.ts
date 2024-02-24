import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VinoListComponent} from "./components/vino-list/vino-list.component";
import {VinoNewComponent} from "./components/vino-new/vino-new.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"vino/list",
    pathMatch:"full"
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
    path:"**",
    redirectTo:"vinoo--no-standalone",
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
