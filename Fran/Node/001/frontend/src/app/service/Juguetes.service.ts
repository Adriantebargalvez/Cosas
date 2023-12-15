import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Root2} from "../common/Juguetes";

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {
URL = 'http://localhost:3000/api/juguetes';
  constructor(private http:HttpClient) { }
getJuguetesList():Observable<Root2[]>{
    return this.http.get<Root2[]>(this.URL);
}
}
