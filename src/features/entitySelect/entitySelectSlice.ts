import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Entity } from '../../interfaces/Entity';

const initialState: Entity[] = [
    Entity.Character,
    Entity.Planet,
    Entity.Starship,
];

export const entitySelectSlice = createSlice({
    name: 'entitySelect',
    initialState,
    reducers: {
        added: (state, action: PayloadAction<Entity>) => {
            state.push(action.payload);
        },
        removed: (state, action: PayloadAction<Entity>) => {
            return state.filter((entity) => entity !== action.payload);
        },
    },
})

export const { added, removed } = entitySelectSlice.actions;

export const selectEntities = (state: RootState) => state.entitySelect;

export default entitySelectSlice.reducer;
