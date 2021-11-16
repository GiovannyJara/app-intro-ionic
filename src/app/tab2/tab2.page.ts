import { Component } from '@angular/core';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public episodes:any=[];
  constructor(
    private _episodes:EpisodesService
  ) {}

  ngOnInit(): void {
    this.getEpisode();
  }
  getEpisode(){
    this._episodes.getEpisodes().subscribe( episodes => {
      this.episodes = episodes;
      console.log(this.episodes);
    } )
  }


}
