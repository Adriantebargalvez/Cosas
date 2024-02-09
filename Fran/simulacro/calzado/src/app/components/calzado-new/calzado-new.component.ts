import { Component } from '@angular/core';
import {Calzado} from "../../common/calzado";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../validators/FormValidators";
import {ActivatedRoute, Router} from "@angular/router";
import {CalzadoService} from "../../services/calzado.service";

@Component({
  selector: 'app-calzado-new',
  templateUrl: './calzado-new.component.html',
  styleUrls: ['./calzado-new.component.css']
})
export class CalzadoNewComponent {

  formCalzado: FormGroup = this.formBuilder.group({
    _id: [''],
    nombre: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
    imagen: ['',[Validators.required,FormValidators.notImgFile]],
    precio: [0,[Validators.required,Validators.min(0)]],
    tipo: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(3)]],
    talla: [0,[Validators.required,Validators.min(6),Validators.max(47)]],
    color: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(2)]]
  });
  constructor(
              private calzadoService: CalzadoService,
              private formBuilder: FormBuilder,
              private router: Router ) {

  }
  get nombre(){
    return this.formCalzado.get('nombre');
  }
  get imagen(){
    return this.formCalzado.get('imagen');
  }
  get precio(){
    return this.formCalzado.get('precio');
  }
  get tipo(){
    return this.formCalzado.get('tipo');
  }
  get color(){
    return this.formCalzado.get('color');
  }
  get talla(){
    return this.formCalzado.get('talla');
  }

  insertar() {
    if(this.formCalzado.invalid){
      this.formCalzado.markAsTouched();
      return;
    }
    const miCalzado = this.formCalzado.getRawValue();
    delete miCalzado._id;
    this.calzadoService.addCalzado(miCalzado
   ).subscribe({
      next: value => {
        alert(value.nombre+'insertado');
        this.router.navigateByUrl('/calzado/list')
      },
      error: err =>{
        console.error(err);
      }
    })
  }
}
