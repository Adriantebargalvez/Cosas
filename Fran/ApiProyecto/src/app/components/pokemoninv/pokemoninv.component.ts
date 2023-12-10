import {Component, OnInit} from '@angular/core';
import {Agent} from "../../common/agents";
import {AgentsService} from "../../services/agents.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../../common/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemoninv',
  templateUrl: './pokemoninv.component.html',
  styleUrls: ['./pokemoninv.component.css']
})
export class PokemoninvComponent implements OnInit{
  pokemon!: Pokemon;
  constructor(private pokemonService:PokemonService,private activatesRouter:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadpokemon();
  }
  private loadpokemon(){
    const id=this.activatesRouter.snapshot.params['id'];

    this.pokemonService.getpokemon(id).subscribe(
      {next:value =>  {
          this.pokemon = value.data;
        },
        error: err => {
          console.log(err)
        },
        complete: () => {
          console.log("Complete")
        }}
    )
  }
}
