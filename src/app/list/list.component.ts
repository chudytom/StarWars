import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../Character';
import { ActivatedRoute, Params } from '@angular/router';
import { CharactersService } from '../characters.service';
import { CharacterSideHelper, CharacterSide } from '../CharacterSide';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters: Character[];
  routeParams: Params;
  currentSideEnum = CharacterSide.All;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentSideEnum = CharacterSideHelper.GetEnumFromString(params.side);
      this.characters = this.characterService.getFilteredCharacters(this.currentSideEnum);
    });
    this.characterService.charactersChanged.subscribe(
      () => {
        this.characters = this.characterService.getFilteredCharacters(this.currentSideEnum);
      }
    );
  }
}
