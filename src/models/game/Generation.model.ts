import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface Generation {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    abilities: NamedAPIResource[]; //A list of abilities that were introduced in this generation.
    names: Name[]; //The name of this resource listed in different languages.
    main_region: NamedAPIResource; //The main region travelled in this generation.
    moves: NamedAPIResource[]; //A list of moves that were introduced in this generation.
    pokemon_species: NamedAPIResource[]; //A list of Pokémon species that were introduced in this generation.
    types: NamedAPIResource[]; //A list of types that were introduced in this generation.
    version_groups: NamedAPIResource[]; //A list of version groups that were introduced in this generation.
}