import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Weapon} from "../common/weapons";


@Injectable({
  providedIn: 'root'
})
export class WeaponsService {
  URLBASE = 'https://mhw-db.com/weapons/'
  constructor(private hhtp: HttpClient) { }
  getWeapons(): Observable<Weapon[]>{
    return this.hhtp.get<Weapon[]>(this.URLBASE);
  }
  getWeapon(id: number): Observable<Weapon>{
    return this.hhtp.get<Weapon>(this.URLBASE+id)
  }
}

