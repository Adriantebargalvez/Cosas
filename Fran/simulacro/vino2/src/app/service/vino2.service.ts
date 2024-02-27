import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bottles, Root} from "../common/vino2";

@Injectable({
  providedIn: 'root'
})
export class Vino2Service {
private URI= 'https://apibodega.vercel.app/api/v2/bodega/';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Bottles>{
    return this.http.get<Bottles>(this.URI+'allBottles/')
  }

}
