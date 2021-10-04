import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { EntityType } from '../../interfaces/Entity';

const initialState: EntityType[] = [
    EntityType.Character,
    EntityType.Planet,
    EntityType.Starship,
];

export const entitySelectSlice = createSlice({
    name: 'entitySelect',
    initialState,
    reducers: {
        added: (state, action: PayloadAction<EntityType>) => {
            state.push(action.payload);
        },
        removed: (state, action: PayloadAction<EntityType>) => {
            return state.filter((entity) => entity !== action.payload);
        },
    },
})

export const { added, removed } = entitySelectSlice.actions;

export const selectEntityTypes = (state: RootState) => state.entitySelect;

export default entitySelectSlice.reducer;
