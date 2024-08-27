import { Name } from '../common/Name.model';
import { NaturePokeathlonStatAffectSets } from './NaturePokeathlonStatAffectSets.model';

export interface PokeathlonStat {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    names: Name[]; //The name of this resource listed in different languages.
    affecting_natures: NaturePokeathlonStatAffectSets; //A detail of natures which affect this Pokéathlon stat positively or negatively.
}