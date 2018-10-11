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
  constructor() {}

  ngOnInit() {}

}
