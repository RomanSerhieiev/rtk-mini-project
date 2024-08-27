import { FlavorText } from '../common/FlavorText.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface SuperContestEffect {
    id: number; //The identifier for this resource.
    appeal: number; //The level of appeal this super contest effect has.
    flavor_text_entries: FlavorText[]; //The flavor text of this super contest effect listed in different languages.
    moves: NamedAPIResource[]; //A list of moves that have the effect when used in super contests.
}