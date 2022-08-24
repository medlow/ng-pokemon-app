import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  template: `<h1>Listed de Pokemons</h1>`
})
export class AppComponent implements OnInit {
  pokemonList : Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
  this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`vous avez clique sur le pokemon${pokemon.name}`);
  }
}