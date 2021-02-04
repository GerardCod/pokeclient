import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.items = this.service.getPokemonItems();
  }

}
