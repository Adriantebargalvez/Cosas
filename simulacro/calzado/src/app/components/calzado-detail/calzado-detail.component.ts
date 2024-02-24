import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CalzadoService} from "../../services/calzado.service";
import {Calzado} from "../../common/calzado";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FormValidators} from "../../validators/FormValidators";

@Component({
  selector: 'app-calzado-detail',
  templateUrl: './calzado-detail.component.html',
  styleUrls: ['./calzado-detail.component.css']
})
export class CalzadoDetailComponent {
  calzado!: Calzado;
  formCalzado: FormGroup = this.formBuilder.group({
    _id: [''],
    nombre: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
    imagen: ['',[Validators.required,FormValidators.notImgFile]],
    precio: [0,[Validators.required,Validators.min(0)]],
    tipo: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(3)]],
    talla: [0,[Validators.required,Validators.min(36),Validators.max(47)]],
    color: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(2)]]
  });
constructor(private arou: ActivatedRoute,
            private calzadoService: CalzadoService,
            private formBuilder: FormBuilder,
            private router: Router ) {
  this.loadCalzado();
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
  private loadCalzado() {
    const id = this.arou.snapshot.params['id'];
    this.calzadoService.getOne(id).subscribe({
      next: value => {
        this.calzado = value;
        this.formCalzado.patchValue(value);
        console.log(this.calzado);
      },
      error: err => {
        console.error(err);
      }
    })
  }

  actualizar() {
    if(this.formCalzado.invalid){
      this.formCalzado.markAsTouched();
      return;
    }
    this.calzadoService.actualizarCalzado(this.formCalzado.getRawValue()).subscribe({
      next: value => {
        alert(value.nombre+'actualizado');
        this.router.navigateByUrl('/calzado/list')
      },
      error: err =>{
        console.error(err);
      }
    })
  }

  protected readonly faTrashCan = faTrashCan;
  protected readonly faEdit = faEdit;
  protected readonly faShoppingCart = faShoppingCart;
}
