import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  public character:any=[];

  constructor(
    private _characterService:CharactersService,
    private _activatedRoute:ActivatedRoute,
    private _getCharacterDetail:CharactersService
  ) { }

  ngOnInit() {
    // this.getDetail();
    const id = this._activatedRoute.snapshot.paramMap.get('id');
   
    this._characterService.getCharacterDetail(id).subscribe( character => { 
      this.character = character;
      console.log(this.character); 
    } )
  }
s
  // getCharacters(){
  //   this._characterService.getCharacters().subscribe( (character) => {
  //     console.log(character);
  //   } );
  // }

}
