import { RootState } from '../../app/store';
import { Entity, EntityType } from '../../interfaces/Entity';
import { UniqueFilterType } from '../../interfaces/UniqueFilter';
import { isCharacter, isPlanet } from './utils';

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

                    if (uniqueFilter.value.length) {
                        // @ts-ignore
                        return uniqueFilter.value.some((selectUniqueFilter) => {
                            if (isPlanet(entity) && uniqueFilter.field === 'terrain') {
                                // @ts-ignore
                                return entity[uniqueFilter.field].split(', ').some((terrain) => (
                                    terrain === selectUniqueFilter
                                ));
                            }
                            if (isCharacter(entity) && uniqueFilter.field === 'hair_color') {
                                // @ts-ignore
                                return entity[uniqueFilter.field].split(', ').some((hairColor) => (
                                    hairColor === selectUniqueFilter
                                ));
                            }
                            // @ts-ignore 
                            return selectUniqueFilter === entity[uniqueFilter.field]
                        });
                    } else {
                        return true;
                    }
                });
            })
        }
    }

    return filteredEntities;
};
