import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../Character';
import { CharacterSide } from '../CharacterSide';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  public character: Character;

  constructor(private characterService: CharactersService) {}

  ngOnInit() {}

  public onLightClicked() {
    const characterChanged = this.characterService.changeCharacterSide(
      this.character,
      CharacterSide.Light
    );
    if (!characterChanged) {
      console.log('Such character was not found and therefore not changed');
    }
  }

  public onDarkClicked() {
    const characterChanged = this.characterService.changeCharacterSide(
      this.character,
      CharacterSide.Dark
    );
    if (!characterChanged) {
      console.log('Such character was not found and therefore not changed');
    }
  }
}
