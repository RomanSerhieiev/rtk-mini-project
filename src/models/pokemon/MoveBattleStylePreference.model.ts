import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface MoveBattleStylePreference {
    low_hp_preference: number; //Chance of using the move, in percent, if HP is under one half.
    high_hp_preference: number; //Chance of using the move, in percent, if HP is over one half.
    move_battle_style: NamedAPIResource; //The move battle style.
}