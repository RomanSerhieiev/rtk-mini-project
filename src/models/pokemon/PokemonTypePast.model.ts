import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { PokemonType } from './PokemonType.model';

export interface PokemonTypePast {
    generation: NamedAPIResource; //The last generation in which the referenced pokémon had the listed types.
    types: PokemonType[]; //The types the referenced pokémon had up to and including the listed generation.
}