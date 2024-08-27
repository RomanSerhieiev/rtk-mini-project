import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';
import { GenerationGameIndex } from '../common/GenerationGameIndex.model';

export interface Location {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    region: NamedAPIResource; //The region this location can be found in.
    names: Name[]; //The name of this resource listed in different languages.
    game_indices: GenerationGameIndex[]; //A list of game indices relevent to this location by generation.
    areas: NamedAPIResource[]; //Areas that can be found within this location.
}