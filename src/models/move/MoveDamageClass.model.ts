import { Description } from '../common/Description.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface MoveDamageClass {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    descriptions: Description[]; //The description of this resource listed in different languages.
    moves: NamedAPIResource[]; //A list of moves that fall into this damage class.
    names: Name[]; //The name of this resource listed in different languages.
}