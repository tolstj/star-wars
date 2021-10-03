import { BASE_URL } from './api';
import { Starship } from '../../../interfaces/Starship';

export class StarshipApi {
    public static async get(): Promise<{ results: Starship[] }> {
        const response = await fetch(`${BASE_URL}/starships`);
        return response.json();
    }
}
