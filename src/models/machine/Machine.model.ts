import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface Machine {
    id: number; //The identifier for this resource.
    item: NamedAPIResource; //The TM or HM item that corresponds to this machine.
    move: NamedAPIResource; //The move that is taught by this machine.
    version_group: NamedAPIResource; //The version group that this machine applies to.
}