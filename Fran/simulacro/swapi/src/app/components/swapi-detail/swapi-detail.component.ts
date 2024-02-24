import { Component } from '@angular/core';
import {Swapi} from "../../common/swapi";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SwapiService} from "../../services/swapi.service";

@Component({
  selector: 'app-swapi-detail',
  templateUrl: './swapi-detail.component.html',
  styleUrls: ['./swapi-detail.component.css']
})
export class SwapiDetailComponent {
swapi!:Swapi;
formSwapi: FormGroup = this.formBuilder.group({
  name:[''],
  skin_color:[''],
  gender:[''],
  mass:[0],
})
constructor(private arou:ActivatedRoute,private swapiService: SwapiService,private formBuilder: FormBuilder,private router:Router) {
  this.loadSwapi()
}
get name(){
  return this.formSwapi.get('name')
}
get skin_color(){
  return this.formSwapi.get('skin_color')
}
get gender(){
  return this.formSwapi.get('gender')
}
get mass(){
  return this.formSwapi.get('mass')
}
  private loadSwapi() {
    const name = this.arou.snapshot.params['name'];
    this.swapiService.getOne(name).subscribe({
      next:value => {
        this.swapi = value;
        this.formSwapi.patchValue(value);
        console.log(this.swapi)
      },
      error:err => {
        console.error(err);
      }
    })
  }
  actualizar() {
    if(this.formSwapi.invalid){
      this.formSwapi.markAsTouched();
      return;
    }
    this.swapiService.actualizarSwapi(this.formSwapi.getRawValue()).subscribe({
      next: value => {
        alert(value.name+'actualizado');
        this.router.navigateByUrl('/swapi/lisy')
      },
      error: err =>{
        console.error(err);
      }
    })

  }



}
