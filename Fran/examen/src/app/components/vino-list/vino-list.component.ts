import { Component } from '@angular/core';
import {Root} from "../../common/vino";
import {VinoService} from "../../services/vino.service";

@Component({
  selector: 'app-vino-list',
  templateUrl: './vino-list.component.html',
  styleUrls: ['./vino-list.component.css']
})
export class VinoListComponent {
listaVino: Root[]=[];

constructor(private vinoService: VinoService) {
  this.loadvino();
}

  private loadvino() {
    this.vinoService.getAll().subscribe({
      next: value => {
        this.listaVino=value;
      },
      error: err => {
       console.error(err);
      },
      complete: () =>{
        console.log('Load complete')
      }
    })
  }
}
