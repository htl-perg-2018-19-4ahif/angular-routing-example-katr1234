import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'pokemon', component:PokemonListComponent},
  {path: 'pokemon/:pokemonId', component:PokemonDetailsComponent},
  {path: '', redirectTo:'/pokemon', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
