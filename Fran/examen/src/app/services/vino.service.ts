import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Root} from "../common/vino";

@Injectable({
  providedIn: 'root'
})
export class VinoService {
private URI = 'http://localhost:4200/vino/list'
  constructor(private http: HttpClient) { }
  getAll(): Observable<Root[]>{
    return this.http.get<Root[]>(this.URI)
  }
    addVino(root: Root): Observable<Root>{
  return this.http.post<Root>(this.URI+'insertar',root)
  }
}
