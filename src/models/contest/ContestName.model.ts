import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface ContestName {
    name: string; //The name for this contest.
    color: string; //The color associated with this contest's name.
    language: NamedAPIResource; //The language that this name is in.
}