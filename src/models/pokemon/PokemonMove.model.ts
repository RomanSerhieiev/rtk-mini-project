import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { PokemonMoveVersion } from './PokemonMoveVersion.model';

export interface PokemonMove {
    move: NamedAPIResource; //The move the Pokémon can learn.
    version_group_details: PokemonMoveVersion[]; //The details of the version in which the Pokémon can learn the move.
}