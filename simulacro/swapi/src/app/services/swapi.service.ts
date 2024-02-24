import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Result, Swapi} from "../common/swapi";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
private URI = "https://swapi.dev/api/people/?format=json";
  constructor(private http: HttpClient) { }
  getAll(): Observable<Swapi>{
    return this.http.get<Swapi>(this.URI);
  }
  getOne(name: string): Observable<Swapi>{
    return this.http.get<Swapi>(this.URI+'swapi/'+name);
  }
  getByName(nombre: string): Observable<Swapi[]>{
    return this.http.get<Swapi[]>(this.URI+'nombre/'+nombre);
  }
  addSwapi(swapi: Swapi): Observable<Swapi>{
    return this.http.post<Swapi>(this.URI+'insertar',swapi);
  }
  actualizarSwapi(swapi: Result): Observable<Result>{
    return this.http.patch<Result>(this.URI+'actualizar/'+swapi.name,swapi);
  }
  borrarSwapi( id: string): Observable<ApiTesultDelete>{
    return this.http.delete<ApiTesultDelete>(this.URI+'borrar/'+id);
  }
}
interface ApiTesultDelete{
  status: string;
}
