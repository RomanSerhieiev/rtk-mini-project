import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { ContestName } from './ContestName.model';

export interface ContestType {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    berry_flavor: NamedAPIResource; //The berry flavor that correlates with this contest type.
    names: ContestName[]; //The name of this contest type listed in different languages.
}