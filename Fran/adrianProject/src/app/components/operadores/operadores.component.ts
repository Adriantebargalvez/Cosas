import { Component } from '@angular/core';
import {map, Observable, of} from "rxjs";

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent {
  numbers1= of(1,2,3);
 squaredNumbers =
     this.numbers1.pipe(map(x => x * x));

 constructor() {
   this.operadorMap();
 }
 operadorMap(){
   this.squaredNumbers.subscribe(
       {
         next: res => console.log('Map',res),
         error: err => console.error(err),
         complete: () => console.log('Map complete')
       }

   )
 }
}
