import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterApi } from './api/CharacterApi';
import { PlanetApi } from './api/PlanetApi';
import { StarshipApi } from './api/StarshipApi';
import { overwriteCharactersNones, overwritePlanetsNones, overwriteStarshipsNones } from './utils';

export const fetchEntities = createAsyncThunk('entitiesList/fetchEntities', async () => {
    let { results: characters } = await CharacterApi.get();
    let { results: planets } = await PlanetApi.get();
    let { results: starships } = await StarshipApi.get();

    characters = overwriteCharactersNones(characters);
    planets = overwritePlanetsNones(planets);
    starships = overwriteStarshipsNones(starships);

    return {
        characters,
        planets,
        starships,
    };
});
