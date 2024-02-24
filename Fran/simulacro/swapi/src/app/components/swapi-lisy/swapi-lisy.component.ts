import { Component } from '@angular/core';
import {Result} from "../../common/swapi";
import {SwapiService} from "../../services/swapi.service";
import {faEdit, faTrashCan} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-swapi-lisy',
  templateUrl: './swapi-lisy.component.html',
  styleUrls: ['./swapi-lisy.component.css']
})
export class SwapiLisyComponent {
lista: Result[]=[];
constructor(private swapiService: SwapiService) {
  this.loadSwapi();
}

  private loadSwapi() {
    this.swapiService.getAll().subscribe({
      next: value => {
        this.lista= value.results;
      },
      error:err => {
        console.error(err)
      },
      complete:() =>{
        console.log('Done')
      }
    })
  }

  protected readonly faEdit = faEdit;
  protected readonly faTrashCan = faTrashCan;

  borrarSwapi(swapi: Result) {
    if (confirm('Desea borrar'+swapi.name+'?')){
      this.swapiService.borrarSwapi(swapi.name).subscribe({
        next: value => {
          alert(value.status);
          this.loadSwapi();
        },
        error:err => {
          console.error(err)
        }
      })
    }
  }
}
