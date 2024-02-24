import { Component } from '@angular/core';
import {Daum, locations} from "../../common/locations";
import {LocationsService} from "../../service/locations.service";
import {faEdit, faTrashCan} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
  infoApi!:locations;
lista: Daum[]=[];
currentPage=1;
lastPage=0;
nextDisable=false;
previousDisable=true;

constructor(private locationsService: LocationsService) {
  this.loadLocations();
}

  private loadLocations() {
    this.locationsService.getAll().subscribe({
      next: value => {
        this.infoApi = value;
        this.lista = value.data;
      },
      error:err => {
        console.error(err)
      },
      complete: ()=>{
        console.log('Done')
      }
    })
  }
  changePage(page: string){
  switch (page){
    case "first":
      if (this.currentPage!==1){
        this.currentPage=1
        this.loadLocations();
      }
      break;
    case"last":
      if (this.currentPage!==this.infoApi.total){
        this.currentPage=this.infoApi.total;
        this.loadLocations();
      }
      break;
    case "next":
      if (this.currentPage!==this.infoApi.total){
        this.currentPage++;
        this.loadLocations();
      }
      break;
    case "previous":
      if (this.currentPage!==1){
        this.currentPage--;
        this.loadLocations();
      }
      break;
  }
  this.nextDisable= this.currentPage===this.infoApi.total
    this.previousDisable = this.currentPage === 1;
  }
  protected readonly faEdit = faEdit;
  protected readonly faTrashCan = faTrashCan;

  borrarLocations(local: Daum) {
    if(confirm('Deseas borrar'+local.name+'?')){
      this.locationsService.borrarLocations(local.id).subscribe({
        next: value => {
          alert(value.status);
          this.loadLocations();
        },
        error:err => {
          console.error(err)
        }
      })
    }
  }

    protected readonly location = location;
  protected readonly Date = Date;


}
