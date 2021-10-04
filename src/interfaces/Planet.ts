export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: Climate;
    gravity: string;
    terrain: Terrain;
    surface_water: string;
    population: string;
    url: string;
}

export enum Terrain {
    Desert = 'desert',
    Grasslands = 'grasslands',
    Mountains = 'mountains',
    Rainforests = 'rainforests',
}

export const terrains = [Terrain.Desert, Terrain.Grasslands, Terrain.Mountains, Terrain.Rainforests];

export enum Climate {
    Frozen = 'frozen',
    Murky = 'murky',
    Temperate = 'temperate',
}

export const climates = [Climate.Frozen, Climate.Murky, Climate.Temperate];
