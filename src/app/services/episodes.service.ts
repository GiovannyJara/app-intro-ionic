import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/R&MAPI';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(
    private _http:HttpClient
  ) { }

  getEpisodes(){
    return this._http.get( API.episodes );
  }

  getDetailEpisode(id){
    return this._http.get( `${API.episodes}/${id}` );
  }

}
