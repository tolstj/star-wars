import { UniqueFilter, UniqueFilterType } from '../uniqueFiltersSlice';
import { maxAtmosphericSpeedFilter } from './common';

const passengersFilter: UniqueFilter = {
    title: 'Passengers >=',
    type: UniqueFilterType.Input,
    value: 0,
}

export const starshipFiltersDefault = [
    maxAtmosphericSpeedFilter,
    passengersFilter,
];

export type StarshipFilters = typeof starshipFiltersDefault;
