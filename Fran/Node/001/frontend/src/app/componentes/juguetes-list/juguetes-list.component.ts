import {Component, OnInit} from '@angular/core';
import {Root2} from "../../common/Juguetes";
import {JuguetesService} from "../../service/Juguetes.service";

@Component({
  selector: 'app-juguetes-list',
  templateUrl: './juguetes-list.component.html',
  styleUrls: ['./juguetes-list.component.css']
})
export class JuguetesListComponent implements OnInit{
 juguete: Root2[] = [];

 constructor( private jugueteService: JuguetesService){}
  ngOnInit(): void {
   this.loadJuguetes();
  }
private loadJuguetes() {
this.jugueteService.getJuguetesList().subscribe(
  {
    next:value => {
      this.juguete= value;
    },
    error: err =>{
      console.error(err);
    },
    complete: () =>{
      console.log('Done')
    }
  }
)

}
}
