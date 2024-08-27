import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface BerryFlavorMap {
    potency: number; //How powerful the referenced flavor is for this berry.
    flavor: NamedAPIResource; //The referenced berry flavor.
}