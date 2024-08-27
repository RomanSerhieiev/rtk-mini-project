import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface NatureStatAffectSets {
    increase: NamedAPIResource[]; //A list of natures and how they change the referenced stat.
    decrease: NamedAPIResource[]; //A list of nature sand how they change the referenced stat.
}