import { VerboseEffect } from '../common/VerboseEffect.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PastMoveStatValues {
    accuracy: number; //The percent value of how likely this move is to be successful.
    effect_chance: number; //The percent value of how likely it is this moves effect will take effect.
    power: number; //The base power of this move with a value of 0 if it does not have a base power.
    pp: number; //Power points. The number of times this move can be used.
    effect_entries: VerboseEffect[]; //The effect of this move listed in different languages.
    type: NamedAPIResource; //The elemental type of this move.
    version_group: NamedAPIResource; //The version group in which these move stat values were in effect.
}