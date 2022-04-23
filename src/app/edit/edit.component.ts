import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FULLPOKEMONS } from 'src/bdd/pokedex';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pokemons = FULLPOKEMONS;
  pokemon:Pokemon = new Pokemon();

  constructor(private url: ActivatedRoute, private routing: Router) { }

  ngOnInit(): void {

    let urlid = this.url.snapshot.params['id'];
    for(let i = 0; i < this.pokemons.length; i++){
        if(this.pokemons[i].id == urlid){
          this.pokemon = this.pokemons[i];
        }
    }
    
  }

  onSubmit(){
    let link = ['/detail', this.pokemon.id];
    this.routing.navigate(link);
  }

}
