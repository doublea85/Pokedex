import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FULLPOKEMONS } from 'src/bdd/pokedex';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
pokemons = FULLPOKEMONS;
pokemon:Pokemon = new Pokemon();
bgColor:string = "";

  constructor(private url:ActivatedRoute, private routing:Router) { }

  ngOnInit(): void {
    let urlid = this.url.snapshot.params['id'];
    for(let i = 0; i < this.pokemons.length; i++){
        if(this.pokemons[i].id == urlid){
          this.pokemon = this.pokemons[i];
        }
    }
    
   
  }
  
  goBack(): void{
    this.routing.navigate(['']);
  }

  remouvepokemon(){
    this.pokemons.splice(this.pokemons.indexOf(this.pokemon), 1);
    this.goBack;
  }
    

}


