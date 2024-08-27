import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { VerboseEffect } from '../common/VerboseEffect.model';
import { VersionGroupFlavorText } from '../common/VersionGroupFlavorText.model';
import { GenerationGameIndex } from '../common/GenerationGameIndex.model';
import { Name } from '../common/Name.model';
import { ItemSprites } from './ItemSprites.model';
import { ItemHolderPokemon } from './ItemHolderPokemon.model';
import { APIResource } from '../common/APIResource.model';
import { MachineVersionDetail } from '../common/MachineVersionDetail.model';

export interface Item {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    cost: number; //The price of this item in stores.
    fling_power: number; //The power of the move Fling when used with this item.
    fling_effect: NamedAPIResource; //The effect of the move Fling when used with this item.
    attributes: NamedAPIResource[]; //A list of attributes this item has.
    category: NamedAPIResource; //The category of items this item falls into.
    effect_entries: VerboseEffect[]; //The effect of this ability listed in different languages.
    flavor_text_entries: VersionGroupFlavorText[]; //The flavor text of this ability listed in different languages.
    game_indices: GenerationGameIndex[]; //A list of game indices relevent to this item by generation.
    names: Name[]; //The name of this item listed in different languages.
    sprites: ItemSprites; //A set of sprites used to depict this item in the game.
    held_by_pokemon: ItemHolderPokemon[]; //A list of Pokémon that might be found in the wild holding this item.
    baby_trigger_for: APIResource; //An evolution chain this item requires to produce a bay during mating.
    machines: MachineVersionDetail[]; //A list of the machines related to this item.
}