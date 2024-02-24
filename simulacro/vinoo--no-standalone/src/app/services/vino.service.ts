import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Bottle, Bottles} from "../common/vino";

@Injectable({
  providedIn: 'root'
})
//tenemos que conecatr la de bottles que es la que tiene   bottles: Bottle[]
export class VinoService {
  // URL de todas la botellas
  private URI = "https://apibodega.vercel.app/api/v2/bodega/allBottles"
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Bottles> {
    return this.http.get<Bottles>(this.URI)
  }

  addVino(Bottle: Bottle): Observable<Bottle> {
    return this.http.post<Bottle>(this.URI + 'insertar', Bottle)
  }
}
