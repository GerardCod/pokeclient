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
    this.getPokemon('pikachu');
  }

  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
  }

  getPokemon(name: string): void {
    this.pokemonSubscription = this.service.getPokemonByName(name)
    .subscribe(
      (data: Pokemon) => {
        this.pokemon = data;
      }
    )
  }

}