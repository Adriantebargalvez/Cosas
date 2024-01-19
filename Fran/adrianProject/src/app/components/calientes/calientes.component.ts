import { Component } from '@angular/core';
import {interval, Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-calientes',
  templateUrl: './calientes.component.html',
  styleUrls: ['./calientes.component.css']
})
export class CalientesComponent {
counter: number = 0;
private intervalSuscription!: Subscription;
constructor() {
  this.start();
}

 start(){
  this.intervalSuscription=interval(1000).subscribe(
      {
          next: value => {
              this.counter=value;
          },
          error: err => {
              console.log((err))
          },
          complete:()=>{
              console.log('complete');
          }
      }
  )
}
stop(){
  this.intervalSuscription.unsubscribe();
}
}
