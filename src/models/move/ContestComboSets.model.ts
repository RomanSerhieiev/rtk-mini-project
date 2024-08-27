import { ContestComboDetail } from './ContestComboDetail.model';

export interface ContestComboSets {
    normal: ContestComboDetail; //A detail of moves this move can be used before or after, granting additional appeal points in contests.
    super: ContestComboDetail; //A detail of moves this move can be used before or after, granting additional appeal points in super contests.
}