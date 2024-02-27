import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bottle, Bottles, Root} from "../components/common/vino";

@Injectable({
  providedIn: 'root'
})
export class VinoService {
private URI= 'https://apibodega.vercel.app/api/v2/bodega/bottles?page=2'
  constructor(private htt:HttpClient) { }
  getAll(): Observable<Root>{
  return this.htt.get<Root>(this.URI+'allBottles');
  }
  addVino(bottles: Bottle): Observable<Bottle>{
  return this.htt.post<Bottle>(this.URI+ 'bottles',bottles);
  }
}
