import { Injectable } from '@angular/core';
import { FULLPOKEMONS } from 'src/bdd/pokedex';
import { Pokemon } from '../model/pokemon';


@Injectable({
  providedIn: 'root'
})
export class GetPokemonsService {
  pokemons = FULLPOKEMONS;

  constructor() { }

  getPokemons(urlid:number, pokemon:Pokemon){

    for(let i = 0; i < this.pokemons.length; i++){
        if(this.pokemons[i].id == urlid){
          pokemon = this.pokemons[i];
        }
    }
    return pokemon; 
   
  }
}
