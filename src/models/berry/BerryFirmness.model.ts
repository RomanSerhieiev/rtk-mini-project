import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface BerryFirmness {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    berries: NamedAPIResource[]; //A list of the berries with this firmness.
    names: Name[]; //The name of this resource listed in different languages.
}