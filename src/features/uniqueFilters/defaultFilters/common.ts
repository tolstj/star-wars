import { UniqueFilter, UniqueFilterType } from '../../../interfaces/UniqueFilter';


export const maxAtmospheringSpeedFilter: UniqueFilter = {
    field: 'maxAtmospheringSpeed',
    title: 'Max atmosphering speed >=',
    type: UniqueFilterType.Input,
    value: 0,
};
