import { Name } from '../common/Name.model';

export interface MoveBattleStyle {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    names: Name[]; //The name of this resource listed in different languages.
}