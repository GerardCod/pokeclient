import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {
  moves: Move[];
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.moves = this.service.getPokemonMovements();
  }

}
