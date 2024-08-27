import { Name } from '../common/Name.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface EncounterCondition {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    names: Name[]; //The name of this resource listed in different languages.
    values: NamedAPIResource[]; //A list of possible values for this encounter condition.
}