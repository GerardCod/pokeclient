import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'src/app/shared/components/shared/shared.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonCardComponent } from './dashboard/pokemon-card/pokemon-card.component';
import { PokemonTypeComponent } from './dashboard/pokemon-type/pokemon-type.component';
import { AbilitiesComponent } from './dashboard/abilities/abilities.component';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent, PokemonCardComponent, PokemonTypeComponent, AbilitiesComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
