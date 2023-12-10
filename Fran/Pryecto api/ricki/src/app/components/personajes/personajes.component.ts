import {Component, OnInit} from '@angular/core';
import {PersonajesRyM} from "../conmon/personajesRyM";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{
infoAPI!:PersonajesRyM;
  constructor(private charService:CharactersService) {
  }
ngOnInit() {
  this.cargarpersonajes();
}

private cargarpersonajes() {
  this.charService.getCharacters().subscribe({
        next: (data: PersonajesRyM) => {
          this.infoAPI = data;
          console.log()
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("complete");
        }

      }
  )
}
}
