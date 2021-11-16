import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  character:any = [];

  constructor(
    private _characterService:CharactersService
  ) {}

  ngOnInit(): void {

    this.getCharacters();
  }

  getCharacters(){
    this._characterService.getCharacters().subscribe( (character) => {
      console.log(character);
      this.character = character;
    } );
  }
}
