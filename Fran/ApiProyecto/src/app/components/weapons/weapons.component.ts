import {Component, OnInit} from '@angular/core';
import {Weapon} from "../../common/weapons";
import {WeaponsService} from "../../services/weapons.service";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit{
weapons: Weapon[] = []


constructor(private weaponService: WeaponsService) {
}

  ngOnInit(): void {
  this.cargaWeapons();
  }
  private cargaWeapons(){
  this.weaponService.getWeapons().subscribe(
    {
      next: value => {
        this.weapons = value;
      },
      error: err => {
        console.error(err)
      },
      complete: () => {
        console.log("complete")
      }
    }




  )
  }
}
