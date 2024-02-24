import { Component } from '@angular/core';
import {Bottle} from "../../common/vino";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VinoService} from "../../services/vino.service";
import {FormValidators} from "../../Validators/FormValidators";

@Component({
  selector: 'app-vino-new',
  templateUrl: './vino-new.component.html',
  styleUrls: ['./vino-new.component.css']
})
export class VinoNewComponent {
  formVino: FormGroup = this.formBuilder.group({
    _id: [''],
    nombre: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(5)]],
    imagen: ['',[Validators.required,FormValidators.notImgFile]],
    uva: ['',[FormValidators.notOnlyWhitespace,Validators.required,Validators.minLength(3)]],
    anyo: [0,[Validators.required,Validators.min(0)]],
    precio: [0,[Validators.required,Validators.min(6),Validators.max(47)]],
  });
  constructor(
    private vinoService: VinoService,
    private formBuilder: FormBuilder,
    private router: Router ) {

  }
  get nombre(){
    return this.formVino.get('nombre');
  }
  get imagen(){
    return this.formVino.get('imagen');
  }
  get precio(){
    return this.formVino.get('precio');
  }
  get uva(){
    return this.formVino.get('uva');
  }
  get anyo(){
    return this.formVino.get('anyo');
  }


  insertar() {
    if(this.formVino.invalid){
      this.formVino.markAsTouched();
      return;
    }
    const miVino = this.formVino.getRawValue();
    delete miVino._id;
    this.vinoService.addVino(miVino
    ).subscribe({
      next: value => {
        alert(value.nombre+'insertado');
        this.router.navigateByUrl('/vino/list')
      },
      error: err =>{
        console.error(err);
      }
    })
  }
}
