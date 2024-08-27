import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface TypePokemon {
    slot: number; //The order the Pokémon's types are listed in.
    pokemon: NamedAPIResource; //The Pokémon that has the referenced type.
}