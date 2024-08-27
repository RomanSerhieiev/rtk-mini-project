import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonSpeciesVariety {
    is_default: boolean; //Whether this variety is the default variety.
    pokemon: NamedAPIResource; //The Pokémon variety.
}