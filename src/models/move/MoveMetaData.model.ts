import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface MoveMetaData {
    ailment: NamedAPIResource; //The status ailment this move inflicts on its target.
    category: NamedAPIResource; //The category of move this move falls under, e.g. damage or ailment.
    min_hits: number; //The minimum number of times this move hits. Null if it always only hits once.
    max_hits: number; //The maximum number of times this move hits. Null if it always only hits once.
    min_turns: number; //The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
    max_turns: number; //The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
    drain: number; //HP drain (if positive) or Recoil damage (if negative), in percent of damage done.
    healing: number; //The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.
    crit_rate: number; //Critical hit rate bonus.
    ailment_chance: number; //The likelihood this attack will cause an ailment.
    flinch_chance: number; //The likelihood this attack will cause the target Pokémon to flinch.
    stat_chance: number; //The likelihood this attack will cause a stat change in the target Pokémon.
}