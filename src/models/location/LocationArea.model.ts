import { EncounterMethodRate } from './EncounterMethodRate.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';
import { PokemonEncounter } from './PokemonEncounter.model';

export interface LocationArea {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    game_index: number; //The internal id of an API resource within game data.
    encounter_method_rates: EncounterMethodRate[]; //A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game.
    location: NamedAPIResource; //The region this location area can be found in.
    names: Name[]; //The name of this resource listed in different languages.
    pokemon_encounters: PokemonEncounter[]; //A list of Pokémon that can be encountered in this area along with version specific details about the encounter.
}