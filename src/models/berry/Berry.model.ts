import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { BerryFlavorMap } from './BerryFlavorMap.model';

export interface Berry {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    growth_time: number; //Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.
    max_harvest: number; //The maximum number of these berries that can grow on one tree in Generation IV.
    natural_gift_power: number; //The power of the move "Natural Gift" when used with this Berry.
    size: number; //The size of this Berry, in millimeters.
    smoothness: number; //The smoothness of this Berry, used in making Pokéblocks or Poffins.
    soil_dryness: number; //The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.
    firmness: NamedAPIResource; //The firmness of this berry, used in making Pokéblocks or Poffins.
    flavors: BerryFlavorMap[]; //A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.
    item: NamedAPIResource; //Berries are actually items. This is a reference to the item specific data for this berry.
    natural_gift_type: NamedAPIResource; //The type inherited by "Natural Gift" when used with this Berry.
}