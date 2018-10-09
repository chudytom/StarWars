import { Injectable } from '@angular/core';
import { Character } from './Character';
import { CharacterSide } from './CharacterSide';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private allCharacters = [
    new Character('Luke SkyWalker'),
    new Character('Darth Vader')
  ];

  public getFilteredCharacters(chosenTab: CharacterSide) {
    if (chosenTab === CharacterSide.All) {
      return this.allCharacters;
    }
    return this.allCharacters.filter(character => character.side === chosenTab);
  }

  public changeCharacterSide(
    character: Character,
    newSide: CharacterSide
  ): Boolean {
    const foundCharacter = this.allCharacters.find(char => char === character);
    if (foundCharacter) {
      foundCharacter.side = newSide;
      return true;
    } else {
      return false;
    }
  }

  constructor() {}
}
