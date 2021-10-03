export interface Planet {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: Climate;
    gravity: string;
    terrain: Terrain;
    surface_water: number;
    population: number;
}

export enum Terrain {
    Desert = 'Desert',
    Grasslands = 'Grasslands',
    Mountains = 'Mountains',
    Rainforests = 'Rainforests',
}

export const terrains = [Terrain.Desert, Terrain.Grasslands, Terrain.Mountains, Terrain.Rainforests];

export enum Climate {
    Frozen = 'Frozen',
    Murky = 'Murky',
    Temperate = 'Temperate',
}

export const climates = [Climate.Frozen, Climate.Murky, Climate.Temperate];
