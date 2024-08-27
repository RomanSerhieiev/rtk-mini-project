import { Name } from '../common/Name.model';

export interface EncounterMethod {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    order: number; //A good value for sorting.
    names: Name[]; //The name of this resource listed in different languages.
}