import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { EncounterVersionDetails } from './EncounterVersionDetails.model';

export interface EncounterMethodRate {
    encounter_method: NamedAPIResource; //The method in which Pokémon may be encountered in an area..
    version_details: EncounterVersionDetails[]; //The chance of the encounter to occur on a version of the game.
}