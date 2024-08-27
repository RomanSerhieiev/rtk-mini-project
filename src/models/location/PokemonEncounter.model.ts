import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { VersionEncounterDetail } from '../common/VersionEncounterDetail.model';

export interface PokemonEncounter {
    pokemon: NamedAPIResource; //The Pokémon being encountered.
    version_details: VersionEncounterDetail[]; //A list of versions and encounters with Pokémon that might happen in the referenced location area.
}