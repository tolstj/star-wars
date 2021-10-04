import { Climate, climates, Terrain, terrains } from '../../../interfaces/Planet';
import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';

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
    field: 'rotation_period',
    title: 'Rotation period >=',
    type: UniqueFilterType.Input,
    value: 0,
};

export const planetFiltersDefault = [
    terrainFilter,
    climateFilter,
    rotationPeriodFilter,
];

export type PlanetFilters = typeof planetFiltersDefault;
