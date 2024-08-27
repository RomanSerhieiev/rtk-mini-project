import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface NatureStatChange {
    max_change: number; //The amount of change.
    pokeathlon_stat: NamedAPIResource; //The stat being affected.
}