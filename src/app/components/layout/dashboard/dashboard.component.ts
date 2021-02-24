import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { PaginationResults } from 'src/app/models/pagination-results';
import { PageResults, Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  resultsSubscription: Subscription;
  pokemonSubscription: Subscription;
  pokemon: Pokemon;
  pokemons: Pokemon[];
  length: number = 0;
  paginatorOpts = new PaginationResults(0, 10, [5, 10, 25, 50, 100]);

  constructor(private service: PokemonService) { }
  
  ngOnInit(): void {
    this.getPokemonsByPage(this.paginatorOpts.pageSize, (this.paginatorOpts.pageSize * this.paginatorOpts.pageIndex));
  }

  ngOnDestroy(): void {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }

    this.resultsSubscription.unsubscribe();
  }

  getPokemonsByPage(limit: number, offset: number): void {
    this.resultsSubscription = this.service
    .getPokemonsByPage(limit, offset)
    .subscribe((data: PageResults) => {
      this.length = data.count;
      this.pokemons = data.results;
      console.log(this.pokemons);
    });
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

  processPage(e: PageEvent): void {
    this.paginatorOpts.pageIndex = e.pageIndex;
    this.paginatorOpts.pageSize = e.pageSize;
    this.getPokemonsByPage(this.paginatorOpts.pageSize, (this.paginatorOpts.pageSize * this.paginatorOpts.pageIndex));
  }
}
