import { EyeColor, eyeColors, Gender, genders, HairColor, hairColors } from '../../../interfaces/Character';
import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';

const hairColorFilter: UniqueFilter<HairColor> = {
    field: 'hair_color',
    title: 'Hair color',
    type: UniqueFilterType.Select,
    options: hairColors,
    value: hairColors,
};

const eyeColorFilter: UniqueFilter<EyeColor> = {
    field: 'eye_color',
    title: 'Eye color',
    type: UniqueFilterType.Select,
    options: eyeColors,
    value: eyeColors,
};

const genderFilter: UniqueFilter<Gender> = {
    field: 'gender',
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
