import { RootState } from '../../app/store';
import { Entity, EntityType } from '../../interfaces/Entity';
import { UniqueFilterType } from '../../interfaces/UniqueFilter';

export const selectFilteredEntities = (state: RootState): Entity[] => {
    let filteredEntities: Entity[] = [];
    
    const selectedEntityTypes = state.entitySelect;
    if (selectedEntityTypes.length) {

        if (selectedEntityTypes.includes(EntityType.Character)) {
            filteredEntities.push(...state.entitiesList.characters);
        }

        if (selectedEntityTypes.includes(EntityType.Planet)) {
            filteredEntities.push(...state.entitiesList.planets);
        }

        if (selectedEntityTypes.includes(EntityType.Starship)) {
            filteredEntities.push(...state.entitiesList.starships);
        }

        const searchQuery = state.search;
        if (searchQuery) {
            filteredEntities = filteredEntities.filter(
                ({ name }: Entity) => name.toLowerCase().includes(searchQuery)
            );
        }

        const uniqueFilters = state.uniqueFilters;
        if (uniqueFilters.length) {
            filteredEntities = filteredEntities.filter((entity: Entity) => {
                // @ts-ignore
                return uniqueFilters.every((uniqueFilter) => {
                    if (uniqueFilter.type === UniqueFilterType.Input) {
                        // @ts-ignore
                        return entity[uniqueFilter.field] >= uniqueFilter.value;
                    }
                    // @ts-ignore
                    return entity[uniqueFilter.field] === uniqueFilter.value;
                });
            })
        }
    }

    return filteredEntities;
};
