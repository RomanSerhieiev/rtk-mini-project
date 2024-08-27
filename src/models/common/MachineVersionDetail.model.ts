import { APIResource } from './APIResource.model';
import { NamedAPIResource } from './NamedAPIResource.model';

export interface MachineVersionDetail {
    machine: APIResource; //The machine that teaches a move from an item.
    version_group: NamedAPIResource; //The version group of this specific machine.
}