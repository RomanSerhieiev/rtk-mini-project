import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface ContestComboDetail {
    use_before: NamedAPIResource[]; //A list of moves to use before this move.
    use_after: NamedAPIResource[]; //A list of moves to use after this move.
}