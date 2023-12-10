import {Component, OnInit} from '@angular/core';
import {CharFS} from "../../common/final-space";
import {FinalSpaceService} from "../../services/final-space.service";

@Component({
  selector: 'app-final-space',
  templateUrl: './final-space.component.html',
  styleUrls: ['./final-space.component.css']
})
export class FinalSpaceComponent implements OnInit {
personajes: CharFS[] = [];

constructor(private finalSpaceService: FinalSpaceService ) {
}

  ngOnInit(): void {
  this.cargarPersonajes()
  }
  private cargarPersonajes() {
  this.finalSpaceService.getCharactersFS().subscribe(
    {
      next: value => {
        this.personajes = value;
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log("Complete")
      }
    }
  )
  }

}
