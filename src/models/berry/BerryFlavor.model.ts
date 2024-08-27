import { FlavorBerryMap } from './FlavorBerryMap.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface BerryFlavor {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    berries: FlavorBerryMap[]; //A list of the berries with this flavor.
    contest_type: NamedAPIResource; //The contest type that correlates with this berry flavor.
    names: Name[]; //The name of this resource listed in different languages.
}