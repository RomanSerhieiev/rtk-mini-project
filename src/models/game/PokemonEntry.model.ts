import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonEntry {
    entry_number: number; //The index of this Pokémon species entry within the Pokédex.
    pokemon_species: NamedAPIResource; //The Pokémon species being encountered.
}