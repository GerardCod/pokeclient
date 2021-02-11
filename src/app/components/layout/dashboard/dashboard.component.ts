import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  pokemonSubscription: Subscription;
  pokemon: Pokemon;

  constructor(private service: PokemonService) { }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }

  getPokemon(search: string): void {
    const id = +search;
    if (id) {
      this.getPokemonById(id);
    } else {
      this.getPokemonByName(search);
    }
  }

  getPokemonById(id: number): void {
    const pokemon: Pokemon = JSON.parse(localStorage.getItem('pokemon'));
    if (pokemon && pokemon.id === id) {
      this.pokemon = pokemon;
    } else {
      this.getPokemonByIdAPI(id);
    }
  }

  getPokemonByIdAPI(id: number): void {
    this.pokemonSubscription = this.service.getPokemonById(id).subscribe(
      (data: Pokemon) => {
        this.pokemon = data;
        localStorage.setItem('pokemon', JSON.stringify(data));
      }
    );
  }

  getPokemonByName(name: string): void {
    const pokemon: Pokemon = JSON.parse(localStorage.getItem('pokemon'));
    if (pokemon && pokemon.name === name) {
      this.pokemon = pokemon;
    } else {
      this.getPokemonByNameAPI(name)
    }
  }
  
  getPokemonByNameAPI(name: string): void {
    this.pokemonSubscription = this.service.getPokemonByName(name)
    .subscribe(
      (data: Pokemon) => {
        this.pokemon = data;
        localStorage.setItem('pokemon', JSON.stringify(this.pokemon));
      }
    )
  }
}
