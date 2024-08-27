import { ContestComboSets } from './ContestComboSets.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { APIResource } from '../common/APIResource.model';
import { VerboseEffect } from '../common/VerboseEffect.model';
import { AbilityEffectChange } from '../pokemon/AbilityEffectChange.model';
import { MoveFlavorText } from './MoveFlavorText.model';
import { MachineVersionDetail } from '../common/MachineVersionDetail.model';
import { MoveMetaData } from './MoveMetaData.model';
import { Name } from '../common/Name.model';
import { PastMoveStatValues } from './PastMoveStatValues.model';
import { MoveStatChange } from './MoveStatChange.model';

export interface Move {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    accuracy: number; //The percent value of how likely this move is to be successful.
    effect_chance: number; //The percent value of how likely it is this moves effect will happen.
    pp: number; //Power points. The number of times this move can be used.
    priority: number; //A value between -8 and 8. Sets the order in which moves are executed during battle. See https://bulbapedia.bulbagarden.net/wiki/Priority for greater detail.
    power: number; //The base power of this move with a value of 0 if it does not have a base power.
    contest_combos: ContestComboSets; //A detail of normal and super contest combos that require this move.
    contest_type: NamedAPIResource; //The type of appeal this move gives a Pokémon when used in a contest.
    contest_effect: APIResource; //The effect the move has when used in a contest.
    damage_class: NamedAPIResource; //The type of damage the move inflicts on the target, e.g. physical.
    effect_entries: VerboseEffect[]; //The effect of this move listed in different languages.
    effect_changes: AbilityEffectChange[]; //The list of previous effects this move has had across version groups of the games.
    learned_by_pokemon: NamedAPIResource[]; //List of Pokemon that can learn the move
    flavor_text_entries: MoveFlavorText[]; //The flavor text of this move listed in different languages.
    generation: NamedAPIResource; //The generation in which this move was introduced.
    machines: MachineVersionDetail[]; //A list of the machines that teach this move.
    meta: MoveMetaData; //Metadata about this move
    names: Name[]; //The name of this resource listed in different languages.
    past_values: PastMoveStatValues[]; //A list of move resource value changes across version groups of the game.
    stat_changes: MoveStatChange[]; //A list of stats this moves effects and how much it effects them.
    super_contest_effect: APIResource; //The effect the move has when used in a super contest.
    target: NamedAPIResource; //The type of target that will receive the effects of the attack.
    type: NamedAPIResource; //The elemental type of this move.
}