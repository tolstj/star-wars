import { Character } from '../../interfaces/Character';
import { Entity } from '../../interfaces/Entity';
import { Planet } from '../../interfaces/Planet';
import { Starship } from '../../interfaces/Starship';

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

export const overwriteCharactersNones = (characters: Character[]) => (
    characters.map((character) => ({
        ...character,
        hair_color: (character.hair_color === 'n/a' || character.hair_color === 'none') ? 'no hair =(' : character.hair_color,
        gender: character.gender === 'n/a' ? 'robot' : character.gender,
    }))
);

export const overwritePlanetsNones = (planets: Planet[]) => (
    planets.map((planet) => ({
        ...planet,
        gravity: planet.gravity === 'N/A' ? 'REALLY BIG GRAVITY' : planet.gravity,
    }))
);

export const overwriteStarshipsNones = (starships: Starship[]) => (
    starships.map((starship) => ({
        ...starship,
        max_atmosphering_speed: starship.max_atmosphering_speed === 'n/a' ? 'no one knows' : starship.max_atmosphering_speed,
        passengers: starship.passengers === 'n/a' ? 'a lot or not' : starship.passengers,
    }))
);
