import { Component } from '@angular/core';
import {Calzado} from "../../common/calzado";
import {CalzadoService} from "../../services/calzado.service";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-calzado-list',
  templateUrl: './calzado-list.component.html',
  styleUrls: ['./calzado-list.component.css']
})
export class CalzadoListComponent {
listaCalzado: Calzado[]= [];

constructor(private calzadoService: CalzadoService) {
  this.loadCalzado();
}
private loadCalzado(){
  this.calzadoService.getAll().subscribe(
    {
      next: value => {
        this.listaCalzado = value;
      },
  error: err => {
        console.error(err);

  },
      complete: () =>{
        console.log('Load complete');
  }
    }
  )
}

  protected readonly faEdit = faEdit;
  protected readonly faTrashCan = faTrashCan;

  borrarCalzado(calzado: Calzado) {
    if(confirm('Desea borrar calzado'+calzado.nombre+'?')){
      this.calzadoService.borrarCalzado(calzado._id).subscribe({
        next: value => {
          alert(value.status);
          this.loadCalzado();
        },
        error: err =>{
          console.error(err)
        },
      })
    }
  }

  protected readonly faShoppingCart = faShoppingCart;

  addToPedido(calzado: Calzado) {
this.calzadoService.addCalzadoToCarrito(calzado);
  }
}
