import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Root} from "../common/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
private URI = 'https://eldenring.fanapis.com/api/locations';
  constructor(private http: HttpClient) { }

  getAll(page: number): Observable<Root>{
    return this.http.get<Root>(this.URI+'?page='+page+'&pageSize=20');
  }
  getOne(id: string): Observable<Root>{
    return this.http.get<Root>(this.URI+id);
  }
  getByName(name: string): Observable<Root>{
    return this.http.get<Root>(this.URI+name);
  }
}
