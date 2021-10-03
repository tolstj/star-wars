import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characters: [],
    planets: [],
    starships: [],
};

export const entitiesListSlice = createSlice({
    name: 'entitiesList',
    initialState,
    reducers: {},
});
