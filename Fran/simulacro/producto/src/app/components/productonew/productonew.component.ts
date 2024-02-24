import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../validators/FormValidators";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../../services/producto.service";
import {Productos} from "../../common/productos";

@Component({
  selector: 'app-productonew',
  templateUrl: './productonew.component.html',
  styleUrls: ['./productonew.component.css']
})
export class ProductonewComponent {

  formProducto: FormGroup = this.formBuilder.group({
    _id:[''],
    nombre:['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
    imagen:["",[Validators.required,FormValidators.notImgFile]],
    precio:[0,[Validators.required,Validators.min(0)]],
    tipo:["",[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
    talla:[0,[Validators.required,Validators.min(36),Validators.max(47)]],
    color:["",[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]]
  })
  constructor(private productoSevice: ProductoService,private formBuilder: FormBuilder,private router: Router) {

  }
  get nombre(){
    return this.formProducto.get('nombre');
  }
  get imagen(){
    return this.formProducto.get('imagen');
  }
  get precio(){
    return this.formProducto.get('precio');
  }
  get tipo(){
    return this.formProducto.get('tipo');
  }
  get talla(){
    return this.formProducto.get('talla');
  }
  get color(){
    return this.formProducto.get('color');
  }


  insertar(){
    if(this.formProducto.invalid){
      this.formProducto.markAsTouched();
      return;
    }
    const miProducto = this.formProducto.getRawValue();
    delete miProducto._id;
    this.productoSevice.addProducto(miProducto).subscribe({
      next: value => {
        alert(value.nombre+' insertado');
        this.router.navigateByUrl('/productolist')
      },
      error:err => {
        console.error(err);
      }
    })
  }
}
