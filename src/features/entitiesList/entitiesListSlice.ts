import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Character } from '../../interfaces/Character';
import { Entity } from '../../interfaces/Entity';
import { Planet } from '../../interfaces/Planet';
import { Starship } from '../../interfaces/Starship';
import { fetchEntities } from './fetch';

export enum LoadingStatus {
    idle,
    loading,
    succeeded,
    failed,
}

interface InitialState {
    characters: Character[];
    planets: Planet[];
    starships: Starship[];
    selectedEntity?: Entity;
    loadingStatus: LoadingStatus;
    error?: string;
}

const initialState: InitialState = {
    characters: [],
    planets: [],
    starships: [],
    loadingStatus: LoadingStatus.idle,
};

export const entitiesListSlice = createSlice({
    name: 'entitiesList',
    initialState,
    reducers: {
        toggledEntity: (state, action: PayloadAction<Entity>) => {
            if (action.payload.name === state.selectedEntity?.name) {
                state.selectedEntity = undefined;
            } else {
                state.selectedEntity = action.payload;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchEntities.pending, (state, action) => {
                state.loadingStatus = LoadingStatus.loading;
            })
            .addCase(fetchEntities.fulfilled, (state, action) => {
                state.loadingStatus = LoadingStatus.succeeded;
                state.characters = action.payload.characters;
                state.planets = action.payload.planets;
                state.starships = action.payload.starships;
            })
            .addCase(fetchEntities.rejected, (state, action) => {
                state.loadingStatus = LoadingStatus.failed;
                state.error = action.error.message;
            });
    },
});

export const selectLoadingStatus = (state: RootState) => state.entitiesList.loadingStatus;
export const selectError = (state: RootState) => state.entitiesList.error;
export const selectSelectedEntity = (state: RootState) => state.entitiesList.selectedEntity;

export const { toggledEntity } = entitiesListSlice.actions;

export default entitiesListSlice.reducer;
