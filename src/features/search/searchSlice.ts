import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState: string = '';

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changed: (state, action: PayloadAction<string>) => {
            return action.payload;
        },
    },
});

export const { changed } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
