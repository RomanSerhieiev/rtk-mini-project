import { MoveStatAffect } from './MoveStatAffect.model';

export interface MoveStatAffectSets {
    increase: MoveStatAffect[]; //A list of moves and how they change the referenced stat.
    decrease: MoveStatAffect[]; //A list of moves and how they change the referenced stat.
}