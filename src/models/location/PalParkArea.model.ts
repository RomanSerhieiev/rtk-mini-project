import { Name } from '../common/Name.model';
import { PalParkEncounterSpecies } from './PalParkEncounterSpecies.model';

export interface PalParkArea {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    names: Name[]; //The name of this resource listed in different languages.
    pokemon_encounters: PalParkEncounterSpecies[]; //A list of Pokémon encountered in thi pal park area along with details.
}