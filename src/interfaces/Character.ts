export interface Character {
    name: string;
    height: number;
    mass: number;
    hair_color: HairColor;
    skin_color: string;
    eye_color: EyeColor;
    birth_year: string;
    gender: Gender;
}

export enum HairColor {
    Black = 'Black',
    Blonde = 'Blonde',
    Brown = 'Brown',
    Grey = 'Grey',
}

export const hairColors = [HairColor.Black, HairColor.Blonde, HairColor.Brown, HairColor.Grey];

export enum EyeColor {
    Blue = 'Blue',
    Brown = 'Brown',
    Red = 'Red',
    Yellow = 'Yellow',
}

export const eyeColors = [EyeColor.Blue, EyeColor.Brown, EyeColor.Red, EyeColor.Yellow];

export enum Gender {
    Female = 'Female',
    Male = 'Male',
}

export const genders = [Gender.Female, Gender.Male];
