import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface FlavorBerryMap {
    potency: number; //How powerful the referenced flavor is for this berry.
    berry: NamedAPIResource; //The berry with the referenced flavor.
}