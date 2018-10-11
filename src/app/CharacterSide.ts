export enum CharacterSide {
  All = 0,
  Light,
  Dark
}

export class CharacterSideHelper {
  public static GetEnumFromString(characterSide: string): CharacterSide {
    switch (characterSide.toLocaleLowerCase()) {
      case 'dark':
        return CharacterSide.Dark;
      case 'light':
        return CharacterSide.Light;
      default:
        return CharacterSide.All;
    }
  }
}
