import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from "@angular/cdk/scrolling";

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    PokemonlistComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ScrollingModule
  ],
  exports: [
    PokemonlistComponent
  ]
})
export class PokemonModule { }
