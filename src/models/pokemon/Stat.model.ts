import { MoveStatAffectSets } from './MoveStatAffectSets.model';
import { NatureStatAffectSets } from './NatureStatAffectSets.model';
import { APIResource } from '../common/APIResource.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface Stat {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    game_index: number; //ID the games use for this stat.
    is_battle_only: boolean; //Whether this stat only exists within a battle.
    affecting_moves: MoveStatAffectSets; //A detail of moves which affect this stat positively or negatively.
    affecting_natures: NatureStatAffectSets; //A detail of natures which affect this stat positively or negatively.
    characteristics: APIResource[]; //A list of characteristics that are set on a Pokémon when its highest base stat is this stat.
    move_damage_class: NamedAPIResource; //The class of damage this stat is directly related to.
    names: Name[]; //The name of this resource listed in different languages.
}