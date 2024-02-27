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

lista: Daum[]=[];


constructor(private locationsService: LocationsService) {
  this.loadLocations();
}

  private loadLocations() {
    this.locationsService.getAll().subscribe({
      next: value => {
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
