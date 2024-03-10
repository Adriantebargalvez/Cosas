import { Component } from '@angular/core';
import {Daum, Root} from "../../common/location";
import {LocationService} from "../../service/location.service";

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.css']
})
export class LocationlistComponent {
lista: Daum[]=[];
info!: Root;
currentPage = 1;
lastPage= 0;
nextDisable=false;
previousDisable= true;
constructor(private locationService: LocationService) {
  this.loadLocation();
}

  private loadLocation() {
    this.locationService.getAll(this.currentPage).subscribe({
      next: value => {
        this.info= value;
        this.lista = value.data;
      },
      error:err => {
        console.error(err)
      },
      complete:()=>{
        console.log('Done')
      }
    })
  }
  changePage(page: string){
  switch (page){
    case 'first':
      if (this.currentPage!==1){
        this.currentPage=1
        this.loadLocation();
      }
      break;
    case 'last':

  }
  }
}
