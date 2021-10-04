import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import entitySelectReducer from '../features/entitySelect/entitySelectSlice';
import uniqueFiltersReducer from '../features/uniqueFilters/uniqueFiltersSlice';
import entitiesListReducer from '../features/entitiesList/entitiesListSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    entitySelect: entitySelectReducer,
    uniqueFilters: uniqueFiltersReducer,
    entitiesList: entitiesListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
