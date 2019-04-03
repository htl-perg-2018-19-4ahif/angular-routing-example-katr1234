import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

interface Ability{
  abilitiy: string;
}

interface Details {
  abilities: Ability[];
  name: string;
}


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})

export class PokemonDetailsComponent implements OnInit {
  public pokemon: Details = { abilities: [], name: '' };
  public pokeId: number;

  constructor(private httpClient: HttpClient, private acRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.acRoute.paramMap.subscribe((params: ParamMap) => {
      this.pokeId = parseInt(params.get('pokemonId'));
    });

    this.pokemon = await this.httpClient.get<Details>('https://pokeapi.co/api/v2/pokemon/' + this.pokeId).toPromise();
  }
}
