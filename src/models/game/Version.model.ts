import { Name } from '../common/Name.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface Version {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    names: Name[]; //The name of this resource listed in different languages.
    version_group: NamedAPIResource; //The version group this version belongs to.
}