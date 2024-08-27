import { Description } from '../common/Description.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface MoveTarget {
    id: number; //The identifier for this resource.
    name: string; //The identifier for this resource.
    descriptions: Description[]; //The description of this resource listed in different languages.
    moves: NamedAPIResource[]; //A list of moves that that are directed at this target.
    names: Name[]; //The name of this resource listed in different languages.
}