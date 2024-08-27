import { Description } from '../common/Description.model';
import { Name } from '../common/Name.model';
import { PokemonEntry } from './PokemonEntry.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface Pokedex {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    is_main_series: boolean; //Whether or not this Pokédex originated in the main series of the video games.
    descriptions: Description[]; //The description of this resource listed in different languages.
    names: Name[]; //The name of this resource listed in different languages.
    pokemon_entries: PokemonEntry[]; //A list of Pokémon catalogued in this Pokédex and their indexes.
    region: NamedAPIResource; //The region this Pokédex catalogues Pokémon for.
    version_groups: NamedAPIResource[]; //A list of version groups this Pokédex is relevant to.
}