import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Character } from '../../interfaces/Character';
import { EntityType } from '../../interfaces/Entity';
import { Planet } from '../../interfaces/Planet';
import { Starship } from '../../interfaces/Starship';

enum LoadingStatus {
    idle,
    loading,
    fulfilled,
    error,
}

interface InitialState {
    characters: Character[];
    planets: Planet[];
    starships: Starship[];
    loadingStatus: LoadingStatus;
    error: null | Error;
}

const initialState: InitialState = {
    characters: [],
    planets: [],
    starships: [],
    loadingStatus: LoadingStatus.idle,
    error: null,
};

export const entitiesListSlice = createSlice({
    name: 'entitiesList',
    initialState,
    reducers: {},
});

export default entitiesListSlice.reducer;
