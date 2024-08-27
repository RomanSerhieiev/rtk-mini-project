import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource; //The method by which the move is learned.
    version_group: NamedAPIResource; //The version group in which the move is learned.
    level_learned_at: number; //The minimum level to learn the move.
}