import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface ItemPocket {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    categories: NamedAPIResource[]; //A list of item categories that are relevant to this item pocket.
    names: Name[]; //The name of this resource listed in different languages.
}