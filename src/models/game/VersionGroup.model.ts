import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface VersionGroup {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    order: number; //Order for sorting. Almost by date of release, except similar versions are grouped together.
    generation: NamedAPIResource; //The generation this version was introduced in.
    move_learn_methods: NamedAPIResource[]; //A list of methods in which Pokémon can learn moves in this version group.
    pokedexes: NamedAPIResource[]; //A list of Pokédexes introduces in this version group.
    regions: NamedAPIResource[]; //A list of regions that can be visited in this version group.
    versions: NamedAPIResource[]; //The versions this version group owns.
}