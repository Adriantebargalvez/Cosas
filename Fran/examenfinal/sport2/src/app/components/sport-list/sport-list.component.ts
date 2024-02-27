import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, Products} from "../../common/sport";
import {SportService} from "../../service/sport.service";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css']
})
export class SportListComponent {
lista:Product[]=[];

  constructor(private sportService: SportService) {
    this.loadSport();
  }

  private loadSport() {
    this.sportService.all().subscribe({
      next:value => {
        this.lista= value.products.products;
      },
      error:err => {
        console.error(err)
      },
      complete:()=>{
        console.log('Load Complete')
      }
    })
  }

  protected readonly faTrashCan = faTrashCan;

  deleteSport(sport: Product) {
    if(confirm('Deseas Borrar'+sport.name+'?')){
      this.sportService.delete(sport._id).subscribe({
        next: value => {
          alert(value.status);
          this.loadSport();
        },
        error:err => {
          console.error(err)
        }
      })
    }
  }
}
