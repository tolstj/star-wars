import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';

const maxAtmospheringSpeedFilter: UniqueFilter = {
    field: 'max_atmosphering_speed',
    title: 'Max atmosphering speed >=',
    type: UniqueFilterType.Input,
    value: 0,
};

const passengersFilter: UniqueFilter = {
    field: 'passengers',
    title: 'Passengers >=',
    type: UniqueFilterType.Input,
    value: 0,
}

export const starshipFiltersDefault = [
    maxAtmospheringSpeedFilter,
    passengersFilter,
];

export type StarshipFilters = typeof starshipFiltersDefault;
