export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: HairColor;
    skin_color: string;
    eye_color: EyeColor;
    birth_year: string;
    gender: Gender;
    url: string;
}

export enum HairColor {
    Black = 'black',
    Blonde = 'blond',
    Brown = 'brown',
    Grey = 'grey',
}

export const hairColors = [HairColor.Black, HairColor.Blonde, HairColor.Brown, HairColor.Grey];

export enum EyeColor {
    Blue = 'blue',
    Brown = 'brown',
    Red = 'red',
    Yellow = 'yellow',
}

export const eyeColors = [EyeColor.Blue, EyeColor.Brown, EyeColor.Red, EyeColor.Yellow];

export enum Gender {
    Female = 'female',
    Male = 'male',
}

export const genders = [Gender.Female, Gender.Male];
