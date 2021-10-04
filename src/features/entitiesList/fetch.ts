import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterApi } from './api/CharacterApi';
import { PlanetApi } from './api/PlanetApi';
import { StarshipApi } from './api/StarshipApi';

export const fetchEntities = createAsyncThunk('entitiesList/fetchEntities', async () => {
    const { results: characters } = await CharacterApi.get();
    const { results: planets } = await PlanetApi.get();
    const { results: starships } = await StarshipApi.get();

    return {
        characters,
        planets,
        starships,
    };
});
