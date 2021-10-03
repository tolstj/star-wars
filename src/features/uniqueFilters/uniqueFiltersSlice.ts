import { createSlice } from '@reduxjs/toolkit';
import { eyeColors, genders, HairColor, hairColors } from '../../interfaces/Character';
import { Entity } from '../../interfaces/Entity';
import { climates, terrains } from '../../interfaces/Planet';
import { CharacterFilters } from './defaultFilters/character';
import { PlanetFilters, planetFiltersDefault } from './defaultFilters/planet';
import { StarshipFilters } from './defaultFilters/starship';

export enum UniqueFilterType {
    Input,
    Select,
}

// OptionType is void when type === UniqueFilterType.Input
export interface UniqueFilter<OptionType = void> {
    title: string;
    type: UniqueFilterType;
    options?: OptionType[];
    value: number | OptionType[];
}

const initialState: CharacterFilters | PlanetFilters | StarshipFilters = [];

export const uniqueFiltersSlice = createSlice({
    name: 'uniqueFilters',
    initialState,
    reducers: {

    }
})
