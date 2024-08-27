import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface NaturePokeathlonStatAffect {
    max_change: number; //The maximum amount of change to the referenced Pokéathlon stat.
    nature: NamedAPIResource; //The nature causing the change.
}