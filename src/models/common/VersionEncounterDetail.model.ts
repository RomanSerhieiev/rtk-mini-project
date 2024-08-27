import { NamedAPIResource } from './NamedAPIResource.model';
import { Encounter } from './Encounter.model';

export interface VersionEncounterDetail {
    version: NamedAPIResource; //The game version this encounter happens in.
    max_chance: number; //The total percentage of all encounter potential.
    encounter_details: Encounter[]; //A list of encounters and their specifics.
}