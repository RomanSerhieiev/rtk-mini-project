import { Effect } from '../common/Effect.model';
import { FlavorText } from '../common/FlavorText.model';

export interface ContestEffect {
    id: number; //The identifier for this resource.
    appeal: number; //The base number of hearts the user of this move gets.
    jam: number; //The base number of hearts the user's opponent loses.
    effect_entries: Effect[]; //The result of this contest effect listed in different languages.
    flavor_text_entries: FlavorText[]; //The flavor text of this contest effect listed in different languages.
}