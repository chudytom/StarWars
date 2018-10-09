import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterSide } from '../CharacterSide';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public CharacterSide = CharacterSide;
  public characters: Character[];
  public chosenTab = CharacterSide.All;
  constructor(private characterService: CharactersService) {}

  ngOnInit() {}

  public onTabChosen(side: CharacterSide) {
    this.chosenTab = side;
  }

  private getCharacters(): Character[] {
    return this.characterService.getFilteredCharacters(this.chosenTab);
  }
}
