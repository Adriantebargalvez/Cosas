import {Component, OnInit} from '@angular/core';
import {Result} from "../../common/ricki";
import {RickiService} from "../../services/ricki.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rickinv',
  templateUrl: './rickinv.component.html',
  styleUrls: ['./rickinv.component.css']
})
export class RickinvComponent implements OnInit {
  rickinv!: Result;

  constructor(
    private activatedRouted:ActivatedRoute,
    private rickiService: RickiService) {
  }

  ngOnInit(): void {
    this.loadpersonaje();
  }

  private loadpersonaje() {
    const id = this.activatedRouted.snapshot.params['id'];
    this.rickiService.getOneCharacter(id).subscribe(
      {
        next: value => {
          this.rickinv = value;
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
