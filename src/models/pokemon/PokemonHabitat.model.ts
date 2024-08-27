import { Name } from '../common/Name.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonHabitat {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    names: Name[]; //The name of this resource listed in different languages.
    pokemon_species: NamedAPIResource[]; //A list of the Pokémon species that can be found in this habitat.
}