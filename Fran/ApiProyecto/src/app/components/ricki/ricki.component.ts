import {Component, OnInit} from '@angular/core';
import {Ricki} from "../../common/ricki";
import {RickiService} from "../../services/ricki.service";

@Component({
  selector: 'app-ricki',
  templateUrl: './ricki.component.html',
  styleUrls: ['./ricki.component.css']
})
export class RickiComponent implements OnInit {
  infoApi!: Ricki;

  constructor(private rickiService: RickiService) {
  }

  ngOnInit(): void {
    this.cargarpersonaje();
  }

  private cargarpersonaje() {
    this.rickiService.getRicki().subscribe(
      {
        next: data => {
          this.infoApi = data;
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
