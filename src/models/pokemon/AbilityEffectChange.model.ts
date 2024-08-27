import { Effect } from '../common/Effect.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface AbilityEffectChange {
    effect_entries: Effect[]; //The previous effect of this ability listed in different languages.
    version_group: NamedAPIResource; //The version group in which the previous effect of this ability originated.
}