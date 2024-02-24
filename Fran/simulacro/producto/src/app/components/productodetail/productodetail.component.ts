import { Component } from '@angular/core';
import {Productos} from "../../common/productos";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../../services/producto.service";
import {FormValidators} from "../../validators/FormValidators";

@Component({
  selector: 'app-productodetail',
  templateUrl: './productodetail.component.html',
  styleUrls: ['./productodetail.component.css']
})
export class ProductodetailComponent {
producto!: Productos;
formProducto: FormGroup = this.formBuilder.group({
_id:[''],
  nombre:['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
  imagen:["",[Validators.required,FormValidators.notImgFile]],
  precio:[0,[Validators.required,Validators.min(0)]],
  tipo:["",[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
  talla:[0,[Validators.required,Validators.min(36),Validators.max(47)]],
  color:["",[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]]
})
  constructor(private arou: ActivatedRoute,private productoSevice: ProductoService,private formBuilder: FormBuilder,private router: Router) {
  this.loadProducto();
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

  private loadProducto() {
const id = this.arou.snapshot.params['id'];
this.productoSevice.getOne(id).subscribe({
  next:value => {
    this.producto= value;
    this.formProducto.patchValue(value);
    console.log(this.producto);
  },
  error:err => {
    console.error(err);
  }
})
  }
  actualizar(){
  if(this.formProducto.invalid){
    this.formProducto.markAsTouched();
    return;
  }
  this.productoSevice.actualizarProducto(this.formProducto.getRawValue()).subscribe({
    next: value => {
      alert(value.nombre+' Actualizado');
      this.router.navigateByUrl('/productolist')
    },
    error:err => {
      console.error(err);
    }
  })
  }
}
