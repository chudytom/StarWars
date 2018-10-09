import { CharacterSide } from './CharacterSide';

export class Character {
  constructor(
    public name: string = 'DefaultCharacter',
    public side: CharacterSide = CharacterSide.All
  ) {}
}
