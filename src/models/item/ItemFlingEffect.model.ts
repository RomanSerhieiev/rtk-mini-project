import { Effect } from '../common/Effect.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface ItemFlingEffect {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    effect_entries: Effect[]; //The result of this fling effect listed in different languages.
    items: NamedAPIResource[]; //A list of items that have this fling effect.
}