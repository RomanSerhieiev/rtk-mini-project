import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';

export interface EncounterConditionValue {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    condition: NamedAPIResource; //The condition this encounter condition value pertains to.
    names: Name[]; //The name of this resource listed in different languages.
}