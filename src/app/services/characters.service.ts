import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/R&MAPI';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private _httpClient:HttpClient
  ) { }

  getCharacters(){
    return this._httpClient.get(`${ API.characters }`)
  }
  getCharacterDetail(id:string){
    return this._httpClient.get( `${API.characters}/${id}` )
  }
}
