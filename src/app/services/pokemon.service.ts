import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

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
}