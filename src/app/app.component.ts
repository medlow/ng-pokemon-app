import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome to {{ pokemonList[0] }}!</h1>`
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre' , 'Salamecche', 'Carapuce'];

  ngOnInit(): void {
    console.table(this.pokemonList);
  
  }

  selectPokemon(pokemonname : string){
    console.log(`vous avez clique sur le pokemon${pokemonname}`);
  }
}