import { AwesomeName } from './AwesomeName.model';
import { Name } from '../common/Name.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonShape {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    awesome_names: AwesomeName[]; //The "scientific" name of this Pokémon shape listed in different languages.
    names: Name[]; //The name of this resource listed in different languages.
    pokemon_species: NamedAPIResource[]; //A list of the Pokémon species that have this shape.
}