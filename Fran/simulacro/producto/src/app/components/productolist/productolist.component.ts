import { Component } from '@angular/core';
import {ProductoService} from "../../services/producto.service";
import {Producto} from "../../common/productos";
import {faEdit, faTrashCan} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-productolist',
  templateUrl: './productolist.component.html',
  styleUrls: ['./productolist.component.css']
})
export class ProductolistComponent {
lista: Producto[]=[];
  currentPage = 1;
  lastPage = 0;
  nextDisable = false;
  previousDisable= true;
  constructor(private productoService: ProductoService) {
    this.loadProducto();
  }

  private loadProducto() {
    this.productoService.getAll().subscribe(
      {
        next: value => {
          this.lista=value;
        },
        error:err => {
          console.error(err)
        },
        complete:()=>{
          console.log('Done')
        }
      }
    )
  }

  protected readonly faEdit = faEdit;
  protected readonly faTrashCan = faTrashCan;

  borrarProducto(producto: Producto) {
    if(confirm('Desaas borrar '+producto.nombre+'?')){
      this.productoService.borrarProducto(producto._id).subscribe({
        next: value => {
          alert(value.status);
          this.loadProducto();
        },
        error:err => {
          console.error(err)
        }
      })
    }
  }
  changePage(page: string){
    switch (page){
      case "first":
        if(this.currentPage!==1){
          this.currentPage=1;
          this.loadProducto();
        }
        break;
      case "last":
       // if(this.currentPage!== this.)
    }
  }
}
