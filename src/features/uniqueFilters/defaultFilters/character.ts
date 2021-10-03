import { EyeColor, eyeColors, Gender, genders, HairColor, hairColors } from '../../../interfaces/Character';
import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';

const hairColorFilter: UniqueFilter<HairColor> = {
    id: 'hairColor',
    title: 'Hair color',
    type: UniqueFilterType.Select,
    options: hairColors,
    value: hairColors,
};

const eyeColorFilter: UniqueFilter<EyeColor> = {
    id: 'eyeColor',
    title: 'Eye color',
    type: UniqueFilterType.Select,
    options: eyeColors,
    value: eyeColors,
};

const genderFilter: UniqueFilter<Gender> = {
    id: 'gender',
    title: 'Gender',
    type: UniqueFilterType.Select,
    options: genders,
    value: genders,
};

export const characterFiltersDefault = [
    hairColorFilter,
    eyeColorFilter,
    genderFilter,
];

export type CharacterFilters = typeof characterFiltersDefault;
