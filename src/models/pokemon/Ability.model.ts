import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';
import { VerboseEffect } from '../common/VerboseEffect.model';
import { AbilityEffectChange } from './AbilityEffectChange.model';
import { AbilityFlavorText } from './AbilityFlavorText.model';
import { AbilityPokemon } from './AbilityPokemon.model';

export interface Ability {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    is_main_series: boolean; //Whether or not this ability originated in the main series of the video games.
    generation: NamedAPIResource; //The generation this ability originated in.
    names: Name[]; //The name of this resource listed in different languages.
    effect_entries: VerboseEffect[]; //The effect of this ability listed in different languages.
    effect_changes: AbilityEffectChange[]; //The list of previous effects this ability has had across version groups.
    flavor_text_entries: AbilityFlavorText[]; //The flavor text of this ability listed in different languages.
    pokemon: AbilityPokemon[]; //A list of Pokémon that could potentially have this ability.
}