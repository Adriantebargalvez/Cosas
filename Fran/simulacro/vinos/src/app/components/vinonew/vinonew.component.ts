import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VinoService} from "../../service/vino.service";
import {Router} from "@angular/router";
import {FormValidators} from "../../validators/FormValidators";

@Component({
  selector: 'app-vinonew',
  templateUrl: './vinonew.component.html',
  styleUrls: ['./vinonew.component.css']
})
export class VinonewComponent {
formBottles: FormGroup = this.formBuilder.group({
  _id: [''],
  nombre: ['',[FormValidators.notOnlyWhitespace,FormValidators.notAllowedWord,Validators.required,Validators.minLength(6)]],
  imagen: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(6)]],
  uva: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
  anyo: [0,[Validators.required,Validators.min(1900),FormValidators.maxCurrentYear]],
  precio: [0,[Validators.required,Validators.min(0)]]
})
  constructor(private vinoService: VinoService,private formBuilder: FormBuilder,private router: Router) {
  }
  get nombre(){
  return this.formBottles.get('nombre');
  }get imagen(){
  return this.formBottles.get('imagen');
  }get uva(){
  return this.formBottles.get('uva');
  }get anyo(){
  return this.formBottles.get('anyo');
  }get precio(){
  return this.formBottles.get('precio');
  }
  insertar(){
  if(this.formBottles.invalid){
    this.formBottles.markAsTouched();
    return;
  }
  const miVino = this.formBottles.getRawValue();
  delete miVino._id;
  this.vinoService.addVino(miVino).subscribe({
    next: value => {
      alert(value.nombre+'insertado');
      this.router.navigateByUrl('/vinonew')
    },
    error:err => {
      console.error(err)
    }
  })
  }
}
