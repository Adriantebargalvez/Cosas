import { Component } from '@angular/core';
import {Vino2Service} from "../../service/vino2.service";
import {Bottle} from "../../common/vino2";

@Component({
  selector: 'app-vino2list',
  templateUrl: './vino2list.component.html',
  styleUrls: ['./vino2list.component.css']
})
export class Vino2listComponent {
lista: Bottle[]=[];

  constructor(private vino2Service: Vino2Service) {
    this.loadVino2();
  }

  private loadVino2() {
    this.vino2Service.getAll().subscribe({
      next: value => {
        this.lista=value.bottles;
      },
      error:err => {
        console.error(err)
      },
      complete:()=>{
        console.log('done')
      }
    })
  }
}
