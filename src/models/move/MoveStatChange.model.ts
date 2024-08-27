import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface MoveStatChange {
    change: number; //The amount of change.
    stat: NamedAPIResource; //The stat being affected.
}