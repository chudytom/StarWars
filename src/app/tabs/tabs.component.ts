import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterSide } from '../CharacterSide';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public CharacterSide = CharacterSide;
  public allCharacters = [
    new Character('Luke SkyWalker'),
    new Character('Darth Vader')
  ];
  public chosenTab = CharacterSide.All;
  constructor() {}

  ngOnInit() {}

  public getFilteredCharacters() {
    if (this.chosenTab === CharacterSide.All) {
      return this.allCharacters;
    }
    return this.allCharacters.filter(
      character => character.side === this.chosenTab
    );
  }

  public onTabChosen(side: CharacterSide) {
    this.chosenTab = side;
  }
}
