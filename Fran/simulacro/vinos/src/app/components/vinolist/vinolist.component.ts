import { Component } from '@angular/core';
import {Bottle, Bottles, Root} from "../common/vino";
import {VinoService} from "../../service/vino.service";

@Component({
  selector: 'app-vinolist',
  templateUrl: './vinolist.component.html',
  styleUrls: ['./vinolist.component.css']
})
export class VinolistComponent {
lista: Bottle[]=[];
infoapi!: Bottles;
currentPage= 1;
lastPage = 0;
nextDisable = false;
previousDisable = true;
  constructor(private vinoService: VinoService) {
    this.loadVino();
  }

  private loadVino() {
    this.vinoService.getAll().subscribe(
      {
        next: value => {
          this.infoapi=value.bottles;
          this.lista= value.bottles.bottles;
        },
        error:err => {
          console.error(err);
        },
        complete: ()=>{
          console.log('done')
        }
      }
    )
  }
  changePage(page: string){
    switch (page){
      case "first":
        if (this.currentPage!==1){
          this.currentPage=1
          this.loadVino();
        }
        break;
      case"last":
        if (this.currentPage!==this.infoapi.info.pages){
          this.currentPage=this.infoapi.info.pages;
          this.loadVino();
        }
        break;
      case "next":
        if (this.currentPage!==this.infoapi.info.pages){
          this.currentPage++;
          this.loadVino();
        }
        break;
      case "previous":
        if (this.currentPage!==1){
          this.currentPage--;
          this.loadVino();
        }
        break;
    }
    this.nextDisable= this.currentPage===this.infoapi.info.pages
    this.previousDisable = this.currentPage === 1;
  }
}
