import { Entity } from '../../interfaces/Entity';

export const getEntityId = (entity: Entity): string => (
    entity.url.replace(/[^0-9]+/g, '')
);

export const excludeUnnecessaryFields = ([field, value]: [field: string, value: string]): boolean => {
    return field !== 'name'
    && field !== 'homeworld'
    && field !== 'films'
    && field !== 'species'
    && field !== 'vehicles'
    && field !== 'starships'
    && field !== 'created'
    && field !== 'edited'
    && field !== 'url'
    && field !== 'pilots'
    && field !== 'residents'
};

export const isCharacter = (entity: Entity): boolean => (
    'hair_color' in entity
);

export const isPlanet = (entity: Entity): boolean => (
    'terrain' in entity
);

export const isStarship = (entity: Entity): boolean => (
    'starship_class' in entity
);
