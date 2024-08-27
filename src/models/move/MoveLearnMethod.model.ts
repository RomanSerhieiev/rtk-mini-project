import { Description } from '../common/Description.model';
import { Name } from '../common/Name.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface MoveLearnMethod {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    descriptions: Description[]; //The description of this resource listed in different languages.
    names: Name[]; //The name of this resource listed in different languages.
    version_groups: NamedAPIResource[]; //A list of version groups where moves can be learned through this method.
}