import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';
import { maxAtmosphericSpeedFilter } from './common';

const passengersFilter: UniqueFilter = {
    id: 'passengers',
    title: 'Passengers >=',
    type: UniqueFilterType.Input,
    value: 0,
}

export const starshipFiltersDefault = [
    maxAtmosphericSpeedFilter,
    passengersFilter,
];

export type StarshipFilters = typeof starshipFiltersDefault;
