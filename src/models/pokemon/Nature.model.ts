import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { NatureStatChange } from './NatureStatChange.model';
import { MoveBattleStylePreference } from './MoveBattleStylePreference.model';
import { Name } from '../common/Name.model';

export interface Nature {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    decreased_stat: NamedAPIResource; //The stat decreased by 10% in Pokémon with this nature.
    increased_stat: NamedAPIResource; //The stat increased by 10% in Pokémon with this nature.
    hates_flavor: NamedAPIResource; //The flavor hated by Pokémon with this nature.
    likes_flavor: NamedAPIResource; //The flavor liked by Pokémon with this nature.
    pokeathlon_stat_changes: NatureStatChange[]; //A list of Pokéathlon stats this nature effects and how much it effects them.
    move_battle_style_preferences: MoveBattleStylePreference[]; //A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent.
    names: Name[]; //The name of this resource listed in different languages.
}