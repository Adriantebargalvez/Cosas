import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../common/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
listaPokemon: Pokemon[] = [];

constructor(private pokemonService: PokemonService) {
}
  ngOnInit(): void {
    this.cargarPokemons();
  }
  private cargarPokemons(){
  this.pokemonService.getpokemons().subscribe(
    {
      next: value => {
        this.listaPokemon = value.data;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log("complete");
      }


        }
  )


  }
}
