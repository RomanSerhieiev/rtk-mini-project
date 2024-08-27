import { PokemonAbility } from './PokemonAbility.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { VersionGameIndex } from '../common/VersionGameIndex.model';
import { PokemonHeldItem } from './PokemonHeldItem.model';
import { PokemonMove } from './PokemonMove.model';
import { PokemonTypePast } from './PokemonTypePast.model';
import { PokemonCries } from './PokemonCries.model';
import { PokemonStat } from './PokemonStat.model';
import { PokemonType } from './PokemonType.model';
import { PokemonAllSprites } from './PokemonAllSprites.model';

export interface Pokemon {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    base_experience: number; //The base experience gained for defeating this Pokémon.
    height: number; //The height of this Pokémon in decimetres.
    is_default: boolean; //Set for exactly one Pokémon used as the default for each species.
    order: number; //Order for sorting. Almost national order, except families are grouped together.
    weight: number; //The weight of this Pokémon in hectograms.
    abilities: PokemonAbility[]; //A list of abilities this Pokémon could potentially have.
    forms: NamedAPIResource[]; //A list of forms this Pokémon can take on.
    game_indices: VersionGameIndex[]; //A list of game indices relevent to Pokémon item by generation.
    held_items: PokemonHeldItem[]; //A list of items this Pokémon may be holding when encountered.
    location_area_encounters: string; //A link to a list of location areas, as well as encounter details pertaining to specific versions.
    moves: PokemonMove[]; //A list of moves along with learn methods and level details pertaining to specific version groups.
    past_types: PokemonTypePast[]; //A list of details showing types this pokémon had in previous generations
    sprites: PokemonAllSprites; //A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at https://github.com/PokeAPI/sprites#sprites
    cries: PokemonCries; //A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at https://github.com/PokeAPI/cries#cries
    species: NamedAPIResource; //The species this Pokémon belongs to.
    stats: PokemonStat[]; //A list of base stat values for this Pokémon.
    types: PokemonType[]; //A list of details showing types this Pokémon has.
}