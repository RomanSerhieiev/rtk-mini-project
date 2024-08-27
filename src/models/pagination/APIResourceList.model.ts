import { APIResource } from '../common/APIResource.model';

export interface APIResourceList {
    count: number; //The total number of resources available from this API.
    next: string; //The URL for the next page in the list.
    previous: string; //The URL for the previous page in the list.
    results: APIResource[]; //A list of unnamed API resources.
}