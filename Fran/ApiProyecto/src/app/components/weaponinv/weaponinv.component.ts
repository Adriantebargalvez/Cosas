import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Weapon} from "../../common/weapons";
import {WeaponsService} from "../../services/weapons.service";

@Component({
  selector: 'app-weaponinv',
  templateUrl: './weaponinv.component.html',
  styleUrls: ['./weaponinv.component.css']
})
export class WeaponinvComponent implements OnInit{
  weaponinv!: Weapon;

  constructor(private weaponsService: WeaponsService, private activatesRouter: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.loadweapon();

  }

  private loadweapon() {
    const id = this.activatesRouter.snapshot.params['id'];

    this.weaponsService.getWeapon(id).subscribe(
      {
        next: value => {
          this.weaponinv = value;
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
