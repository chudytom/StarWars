import { Injectable } from '@angular/core';
import { Character } from './Character';
import { CharacterSide } from './CharacterSide';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public charactersChanged = new Subject<void>();
  private characters = [
    new Character('Luke SkyWalker'),
    new Character('Darth Vader')
  ];

  public getFilteredCharacters(chosenTab: CharacterSide) {
    if (chosenTab === CharacterSide.All) {
      return this.characters;
    }
    return this.characters.filter(character => character.side === chosenTab);
  }

  public changeCharacterSide(
    character: Character,
    newSide: CharacterSide
  ): Boolean {
    const foundCharacter = this.characters.find(char => char === character);
    if (foundCharacter) {
      foundCharacter.side = newSide;
      this.charactersChanged.next();
      return true;
    } else {
      return false;
    }
  }

  public addCharacter(name: string, side: CharacterSide) {
    this.characters.push(new Character(name, side));
  }

  constructor() {}
}
