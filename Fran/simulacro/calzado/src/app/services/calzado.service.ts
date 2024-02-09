import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Calzado} from "../common/calzado";

@Injectable({
  providedIn: 'root'
})
//PRIMERO
export class CalzadoService {
private URI = 'http://localhost:3000/api/v1/calzados/';
  //despues
carrito: BehaviorSubject<Calzado[]> = new BehaviorSubject<Calzado[]>([]);
 precioCarrito: BehaviorSubject<number>= new BehaviorSubject<number>(0);
 //despues
  constructor(private http: HttpClient) {}

  addCalzadoToCarrito(calzado: Calzado){
    const miCarrito = this.carrito.value
   miCarrito.push(calzado);
    this.carrito.next(miCarrito);
    this.precioCarrito.next(this.precioCarrito.value+calzado.precio);
  }
  getAll(): Observable<Calzado[]>{
return this.http.get<Calzado[]>(this.URI);
  }
  getOne(id: string): Observable<Calzado>{
return this.http.get<Calzado>(this.URI+'calzado/'+id);
  }
  getByName(nombre: string): Observable<Calzado[]>{
return this.http.get<Calzado[]>(this.URI+'nombre/'+nombre);
  }
  addCalzado(calzado: Calzado): Observable<Calzado>{
return this.http.post<Calzado>(this.URI+'insertar',calzado);
  }
  actualizarCalzado(calzado: Calzado): Observable<Calzado>{
return this.http.patch<Calzado>(this.URI+'actualizar/'+calzado._id,calzado);
  }
  borrarCalzado(id: string): Observable<ApiResultDelete>{
    return this.http.delete<ApiResultDelete>(this.URI+'borrar/'+id);
  }
}
interface ApiResultDelete{
status: string;
}
//PRIMERO
