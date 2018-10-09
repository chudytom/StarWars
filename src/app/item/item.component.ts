import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../Character';
import { CharacterSide } from '../CharacterSide';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public character: Character;

  constructor() { }

  ngOnInit() {
  }

  public onLightClicked() {
    this.character.side = CharacterSide.Light;
  }

  public onDarkClicked() {
    this.character.side = CharacterSide.Dark;
  }

}
