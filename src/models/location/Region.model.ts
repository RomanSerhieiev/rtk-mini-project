import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface Region {
    id: number; //The identifier for this resource.
    locations: NamedAPIResource[]; //A list of locations that can be found in this region.
    name: string; //The name for this resource.
    names: Name[]; //The name of this resource listed in different languages.
    main_generation: NamedAPIResource; //The generation this region was introduced in.
    pokedexes: NamedAPIResource[]; //A list of pokédexes that catalogue Pokémon in this region.
    version_groups: NamedAPIResource[]; //A list of version groups where this region can be visited.
}