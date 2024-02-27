import {Component, OnInit} from '@angular/core';
import {LocationsService} from "../../service/locations.service";
import {ActivatedRoute} from "@angular/router";
import {Daum, locations} from "../../common/locations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-locations-detail',
  templateUrl: './locations-detail.component.html',
  styleUrls: ['./locations-detail.component.css']
})
export class LocationsDetailComponent implements OnInit{
  locations!: Daum;
  constructor(private locationsService: LocationsService,private ar: ActivatedRoute)  {
  }
    ngOnInit(): void {
        this.loadLocations2();
    }

  private loadLocations2() {
    const id = this.ar.snapshot.params['id'];
    this.locationsService.getOne(id).subscribe({
      next: value => {
        this.locations=value.data;
      },
      error:err => {
        console.error(err);
      },
      complete: ()=>{
        console.log('done')
      }
    })
  }
}

