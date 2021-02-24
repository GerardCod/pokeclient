import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ability, Item, Move, PageResults, Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private endpoint: any;

  constructor(private client: HttpClient, private router: Router) {
    this.endpoint = environment.endpoint;
  }

  public getPokemonById(id: number): Observable<Pokemon> {
    return this.client.get<Pokemon>(`${this.endpoint.api}${this.endpoint.pokemon.id.replace(':id', id)}`);
  }

  public getPokemonByName(name: string): Observable<Pokemon> {
    return this.client.get<Pokemon>(`${this.endpoint.api}${this.endpoint.pokemon.name.replace(':name', name)}`);
  }

  public getPokemonAbilities(): Ability[] {
    const pokemon: Pokemon = JSON.parse(localStorage.getItem('pokemon'));
    return pokemon.abilities;
  }

  public getPokemonMovements(): Move[] {
    const pokemon: Pokemon = JSON.parse(localStorage.getItem('pokemon'));
    return pokemon.moves;
  }

  public getPokemonItems(): Item[] {
    const pokemon: Pokemon = JSON.parse(localStorage.getItem('pokemon'));
    return pokemon.held_items;
  }

  public getPokemonsByPage(limit: number, offset: number): Observable<PageResults> {
    return this.client.get<PageResults>(`${this.endpoint.api}${this.endpoint.pokemon.page.replace(':limit', limit.toString()).replace(':offset', offset.toString())}`) 
  }
}
