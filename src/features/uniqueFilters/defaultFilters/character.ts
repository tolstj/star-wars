import { EyeColor, eyeColors, Gender, genders, HairColor, hairColors } from '../../../interfaces/Character';
import { UniqueFilter, UniqueFilterType } from '../uniqueFiltersSlice';

const hairColorFilter: UniqueFilter<HairColor> = {
    title: 'Hair color',
    type: UniqueFilterType.Select,
    options: hairColors,
    value: hairColors,
};

const eyeColorFilter: UniqueFilter<EyeColor> = {
    title: 'Eye color',
    type: UniqueFilterType.Select,
    options: eyeColors,
    value: eyeColors,
};

const genderFilter: UniqueFilter<Gender> = {
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
