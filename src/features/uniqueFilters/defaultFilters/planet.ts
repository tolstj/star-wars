import { Climate, climates, Terrain, terrains } from '../../../interfaces/Planet';
import { UniqueFilter, UniqueFilterType } from '../uniqueFiltersSlice';
import { maxAtmosphericSpeedFilter } from './common';

const terrainFilter: UniqueFilter<Terrain> = {
    title: 'Terrain',
    type: UniqueFilterType.Select,
    options: terrains,
    value: terrains,
};

const climateFilter: UniqueFilter<Climate> = {
    title: 'Climate',
    type: UniqueFilterType.Select,
    options: climates,
    value: climates,
};

const rotationPeriodFilter: UniqueFilter = {
    title: 'Rotation period >=',
    type: UniqueFilterType.Input,
    value: 0,
};

export const planetFiltersDefault = [
    terrainFilter,
    climateFilter,
    rotationPeriodFilter,
    maxAtmosphericSpeedFilter,
];

export type PlanetFilters = typeof planetFiltersDefault;
