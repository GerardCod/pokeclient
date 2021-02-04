import { Component, Input, OnInit } from '@angular/core';
import { Type } from 'src/app/models/pokemon';
@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {
  @Input() type: Type;

  constructor() { }

  ngOnInit(): void {
  }

}
