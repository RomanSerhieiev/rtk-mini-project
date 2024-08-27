import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';
import { Description } from '../common/Description.model';

export interface ItemAttribute {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    items: NamedAPIResource[]; //A list of items that have this attribute.
    names: Name[]; //The name of this item attribute listed in different languages.
    descriptions: Description[]; //The description of this item attribute listed in different languages.
}