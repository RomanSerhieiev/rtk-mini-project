import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { PokemonFormType } from './PokemonFormType.model';
import { PokemonFormSprites } from './PokemonFormSprites.model';
import { Name } from '../common/Name.model';

export interface PokemonForm {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    order: number; //The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.
    form_order: number; //The order in which forms should be sorted within a species' forms.
    is_default: boolean; //True for exactly one form used as the default for each Pokémon.
    is_battle_only: boolean; //Whether or not this form can only happen during battle.
    is_mega: boolean; //Whether or not this form requires mega evolution.
    form_name: string; //The name of this form.
    pokemon: NamedAPIResource; //The Pokémon that can take on this form.
    types: PokemonFormType[]; //A list of details showing types this Pokémon form has.
    sprites: PokemonFormSprites; //A set of sprites used to depict this Pokémon form in the game.
    version_group: NamedAPIResource; //The version group this Pokémon form was introduced in.
    names: Name[]; //The form specific full name of this Pokémon form, or empty if the form does not have a specific name.
    form_names: Name[]; //The form specific form name of this Pokémon form, or empty if the form does not have a specific name.
}