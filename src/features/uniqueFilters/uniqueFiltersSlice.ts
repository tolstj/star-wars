import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { EyeColor, Gender, HairColor } from '../../interfaces/Character';
import { Entity } from '../../interfaces/Entity';
import { Climate, Terrain } from '../../interfaces/Planet';
import { CharacterFilters, characterFiltersDefault } from './defaultFilters/character';
import { PlanetFilters, planetFiltersDefault } from './defaultFilters/planet';
import { StarshipFilters, starshipFiltersDefault } from './defaultFilters/starship';

interface InputChange {
    id: string;
    value: number;
}

interface SelectChange {
    id: string;
    value: HairColor | EyeColor | Gender | Terrain | Climate;
}

const initialState: CharacterFilters | PlanetFilters | StarshipFilters = [];

export const uniqueFiltersSlice = createSlice({
    name: 'uniqueFilters',
    initialState,
    reducers: {
        initFilters: (state, action: PayloadAction<Entity | null>) => {
            switch (action.payload) {
                case Entity.Character:
                    return characterFiltersDefault;
                case Entity.Planet:
                    return planetFiltersDefault;
                case Entity.Starship:
                    return starshipFiltersDefault;
                default:
                    return [];
            }
        },
        typeInputChanged: (state, action: PayloadAction<InputChange>) => {
            // @ts-ignore
            const foundFilter = state.find(({ id }) => id === action.payload.id);
            if (foundFilter) {
                foundFilter.value = action.payload.value;
            }
        },
        typeSelectAdded: (state, action: PayloadAction<SelectChange>) => {
            // @ts-ignore
            const foundFilter = state.find(({ id }) => id === action.payload.id);
            if (foundFilter) {
                foundFilter.value.push(action.payload.value);
            }
        },
        typeSelectRemoved: (state, action: PayloadAction<SelectChange>) => {
            // @ts-ignore
            const foundFilter = state.find(({ id }) => id === action.payload.id);
            if (foundFilter) {
                foundFilter.value = foundFilter.value.filter((filterValue: any) => filterValue !== action.payload.value);
            }
        },
    },
});

export const { initFilters, typeInputChanged, typeSelectAdded, typeSelectRemoved } = uniqueFiltersSlice.actions;

export const selectUniqueFilters = (state: RootState) => state.uniqueFilters;

export default uniqueFiltersSlice.reducer;
