import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Description } from '../common/Description.model';

export interface MoveCategory {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    moves: NamedAPIResource[]; //A list of moves that fall into this category.
    descriptions: Description[]; //The description of this resource listed in different languages.
}