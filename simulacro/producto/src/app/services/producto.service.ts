import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto, Productos} from "../common/productos";



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
private URI= 'http://localhost:3000/api/v1/calzados/'
  constructor(private http: HttpClient) { }

  getCarta(id:number): Observable<Producto>{
  return this.http.get<Producto>(this.URI+'/'+id)
  }
  getAll():Observable<Productos>{
  return this.http.get<Productos>(this.URI)
  }
  getOne(id: string):Observable<Productos>{
  return this.http.get<Productos>(this.URI+id);
  }
  getByName(nombre: string):Observable<Productos[]>{
  return this.http.get<Productos[]>(this.URI+'nombre/'+nombre);
  }
  addProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.URI+'insertar',producto);
  }
  actualizarProducto(producto: Producto):Observable<Producto>{
  return this.http.patch<Producto>(this.URI+producto._id,producto);
  }
  borrarProducto(id: string ):Observable<ApiResultDelete>{
    return this.http.delete<ApiResultDelete>(this.URI+'borrar/'+id);
  }
}
interface ApiResultDelete {
  status: string;
}
