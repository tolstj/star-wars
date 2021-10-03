import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';


export const maxAtmosphericSpeedFilter: UniqueFilter = {
    id: 'maxAtmosphericSpeed',
    title: 'Max atmospheric speed >=',
    type: UniqueFilterType.Input,
    value: 0,
};
