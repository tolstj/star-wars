import { Character } from './Character';
import { Planet } from './Planet';
import { Starship } from './Starship';

export enum EntityType {
    Character = 'Character',
    Planet = 'Planet',
    Starship = 'Starship',
}

export type Entity = Character | Planet | Starship;
