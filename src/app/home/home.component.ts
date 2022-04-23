import { Component, OnInit } from '@angular/core';
import { FULLPOKEMONS } from 'src/bdd/pokedex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons = FULLPOKEMONS;

  constructor() { }

  ngOnInit(): void {
  }

}
