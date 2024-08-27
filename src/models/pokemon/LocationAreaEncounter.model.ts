import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { VersionEncounterDetail } from '../common/VersionEncounterDetail.model';

export interface LocationAreaEncounter {
    location_area: NamedAPIResource; //The location area the referenced Pokémon can be encountered in.
    version_details: VersionEncounterDetail[]; //A list of versions and encounters with the referenced Pokémon that might happen.
}