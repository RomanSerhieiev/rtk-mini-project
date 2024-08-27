import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface MoveStatAffect {
    change: number; //The maximum amount of change to the referenced stat.
    move: NamedAPIResource; //The move causing the change.
}