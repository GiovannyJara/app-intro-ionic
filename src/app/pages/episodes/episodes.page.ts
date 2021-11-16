import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  public episodes:any= [];
  public episode:any=[];

  constructor(
    private _episodeService:EpisodesService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get( 'id' );
    console.log(id);
    this.getDetailEpisode(id);
  }

  getEpisodes(){
    this._episodeService.getEpisodes().subscribe( (episode) => {
      this.episodes = episode;
    } )
  }

  getDetailEpisode(id:string){
    this._episodeService.getDetailEpisode(id).subscribe( (episodeDetaeil) => {
      this.episode = episodeDetaeil;
      console.log(this.episode);
    } )
  }

}
