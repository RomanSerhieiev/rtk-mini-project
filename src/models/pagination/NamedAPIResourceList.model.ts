import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface NamedAPIResourceList {
    count: number; //The total number of resources available from this API.
    next: string; //The URL for the next page in the list.
    previous: string; //The URL for the previous page in the list.
    results: NamedAPIResource[]; //A list of named API resources.
}