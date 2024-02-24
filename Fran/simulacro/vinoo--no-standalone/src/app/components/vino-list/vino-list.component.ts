import { Component } from '@angular/core';
import {Bottle, Bottles} from "../../common/vino";
import {VinoService} from "../../services/vino.service";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";

@Component({
  selector: 'app-vino-list',
  templateUrl: './vino-list.component.html',
  styleUrls: ['./vino-list.component.css']
})
//aqui ponemos bottle que es el que tien id nombre etc
export class VinoListComponent {
  listaVinos: Bottle[]=[];
constructor(private vinoService: VinoService) {
  this.loadVino();
}
private loadVino() {
  this.vinoService.getAll().subscribe({
      next: value => {
        this.listaVinos = value.bottles;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      }
    }
  )
}
}


