import { UniqueFilter, UniqueFilterType } from '../uniqueFiltersSlice';

export const maxAtmosphericSpeedFilter: UniqueFilter = {
    title: 'Max atmospheric speed >=',
    type: UniqueFilterType.Input,
    value: 0,
};
