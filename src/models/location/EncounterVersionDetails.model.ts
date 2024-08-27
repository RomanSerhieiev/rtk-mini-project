import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface EncounterVersionDetails {
    rate: number; //The chance of an encounter to occur.
    version: NamedAPIResource; //The version of the game in which the encounter can occur with the given chance.
}