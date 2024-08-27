import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface MoveAilment {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    moves: NamedAPIResource[]; //A list of moves that cause this ailment.
    names: Name[]; //The name of this resource listed in different languages.
}