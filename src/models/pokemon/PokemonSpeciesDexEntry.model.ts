import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonSpeciesDexEntry {
    entry_number: number; //The index number within the Pokédex.
    pokedex: NamedAPIResource; //The Pokédex the referenced Pokémon species can be found in.
}