import {Component, OnInit} from '@angular/core';
import {CharFS} from "../../common/final-space";
import {FinalSpaceService} from "../../services/final-space.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-final-spaceinv',
  templateUrl: './final-spaceinv.component.html',
  styleUrls: ['./final-spaceinv.component.css']
})
export class FinalSpaceinvComponent implements OnInit{

 character!: CharFS;

  constructor(private finalspaceinvService: FinalSpaceService,private ar:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loagCharacter()
  }
  private loagCharacter() {
    const id = this.ar.snapshot.params['id'];
    this.finalspaceinvService.getCharacterFS(id).subscribe(
      {
        next: value => {
          this.character = value;
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
