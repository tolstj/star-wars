import { BASE_URL } from './api';
import { Planet } from '../../../interfaces/Planet';

export class PlanetApi {
    public static async get(): Promise<{ results: Planet[] }> {
        const response = await fetch(`${BASE_URL}/planets`);
        return response.json();
    }
}
