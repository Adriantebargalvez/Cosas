import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Daum, locations} from "../common/locations";
@Injectable({
  providedIn: 'root'
})
export class LocationsService {
private URI = "https://eldenring.fanapis.com/api/locations"//?limit=7
  constructor(private http: HttpClient) { }
  getAll(): Observable<locations>{
  return  this.http.get<locations>(this.URI);
  } getOne(id: number): Observable<locations>{
  return  this.http.get<locations>(this.URI+'/'+id);
  } getByName(name: string): Observable<locations>{
  return  this.http.get<locations>(this.URI+'name/'+name);
  } addLocations(locations: locations): Observable<locations>{
  return  this.http.post<locations>(this.URI+'insertar',locations);
  } actualizarLocations(locations: Daum): Observable<locations>{
  return  this.http.patch<locations>(this.URI+'actualizar/'+locations.id,location);
  } borrarLocations(id: string): Observable<ApiResultDelete>{
  return  this.http.delete<ApiResultDelete>(this.URI+'borrar/'+id);
  }
}
interface ApiResultDelete{
  status: string;
}
