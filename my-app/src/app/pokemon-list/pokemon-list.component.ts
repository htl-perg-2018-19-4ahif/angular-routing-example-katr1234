import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pokemon{
  name: string;
  url: string;
}

interface PokemonList{
  count: number;
  results: Pokemon[];
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public searchString: string='';
  public pokemonList: Pokemon[];

  public url:string ='https://pokeapi.co/api/v2/pokemon';


  constructor(private httpClient: HttpClient){}

  async ngOnInit() {
    let count: PokemonList = await this.httpClient.get<PokemonList>(this.url).toPromise();
    this.pokemonList = (await this.httpClient.get<PokemonList>(this.url+'?limit=' + count.count).toPromise()).results;
  }

  public search(event){
    this.searchString=event;
  }

}
