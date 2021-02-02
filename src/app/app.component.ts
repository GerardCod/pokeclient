import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from './models/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dwp';
  pokemonSubscription: Subscription;

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonByName('pikachu');
  }
  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
  }

  getPokemonByName(name: string): void {
    this.pokemonSubscription = this.service.getPokemonByName(name).subscribe(
      (data: Pokemon) => {
        console.log(data);
      }
    );
  }
}
