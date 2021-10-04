import { Climate, climates, Terrain, terrains } from '../../../interfaces/Planet';
import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';

import { maxAtmospheringSpeedFilter } from './common';

const terrainFilter: UniqueFilter<Terrain> = {
    field: 'terrain',
    title: 'Terrain',
    type: UniqueFilterType.Select,
    options: terrains,
    value: terrains,
};

const climateFilter: UniqueFilter<Climate> = {
    field: 'climate',
    title: 'Climate',
    type: UniqueFilterType.Select,
    options: climates,
    value: climates,
};

const rotationPeriodFilter: UniqueFilter = {
    field: 'rotationPeriod',
    title: 'Rotation period >=',
    type: UniqueFilterType.Input,
    value: 0,
};

export const planetFiltersDefault = [
    terrainFilter,
    climateFilter,
    rotationPeriodFilter,
    maxAtmospheringSpeedFilter,
];

export type PlanetFilters = typeof planetFiltersDefault;
