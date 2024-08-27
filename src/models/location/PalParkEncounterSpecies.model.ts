import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PalParkEncounterSpecies {
    base_score: number; //The base score given to the player when this Pokémon is caught during a pal park run.
    rate: number; //The base rate for encountering this Pokémon in this pal park area.
    pokemon_species: NamedAPIResource; //The Pokémon species being encountered.
}