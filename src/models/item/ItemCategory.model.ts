import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface ItemCategory {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    items: NamedAPIResource[]; //A list of items that are a part of this category.
    names: Name[]; //The name of this item category listed in different languages.
    pocket: NamedAPIResource; //The pocket items in this category would be put in.
}