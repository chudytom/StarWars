import { Component, OnInit } from '@angular/core';
import { CharacterSide } from '../CharacterSide';
import { isNumber } from 'util';
import { NgForm } from '@angular/forms';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  public CharacterSide = CharacterSide;
  public keys = Object.keys(CharacterSide).filter((item) => !isNaN(+item));

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.keys.forEach(key => {
      console.log(key);
      console.log(CharacterSide[key]);
    });
  }

  onSubmit(form: NgForm) {
    console.log('Submitted');
    console.log(form);
    const formInput = form.value;
    console.log(formInput);
    this.characterService.addCharacter(formInput.name, +formInput.side);
  }

}
