import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';
import { maxAtmospheringSpeedFilter } from './common';

const passengersFilter: UniqueFilter = {
    id: 'passengers',
    title: 'Passengers >=',
    type: UniqueFilterType.Input,
    value: 0,
}

export const starshipFiltersDefault = [
    maxAtmospheringSpeedFilter,
    passengersFilter,
];

export type StarshipFilters = typeof starshipFiltersDefault;
