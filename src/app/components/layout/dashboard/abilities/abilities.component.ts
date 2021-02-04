import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  abilities: Ability[];

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.abilities = this.service.getPokemonAbilities();
  }

}
