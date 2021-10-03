import { BASE_URL } from './api';
import { Character } from '../../../interfaces/Character';

export class CharacterApi {
    public static async get(): Promise<{ results: Character[] }> {
        const response = await fetch(`${BASE_URL}/people`);
        return response.json();
    }
}
