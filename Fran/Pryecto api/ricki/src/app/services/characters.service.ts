import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersonajesRyM} from "../components/conmon/personajesRyM";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }
  getCharacters():Observable<PersonajesRyM>{
    return  this.http.get<PersonajesRyM>('   https://rickandmortyapi.com/api/character');


  }
}
