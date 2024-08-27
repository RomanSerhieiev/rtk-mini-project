import { Description } from '../common/Description.model';
import { GrowthRateExperienceLevel } from './GrowthRateExperienceLevel.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface GrowthRate {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    formula: string; //The formula used to calculate the rate at which the Pokémon species gains level.
    descriptions: Description[]; //The descriptions of this characteristic listed in different languages.
    levels: GrowthRateExperienceLevel[]; //A list of levels and the amount of experienced needed to atain them based on this growth rate.
    pokemon_species: NamedAPIResource[]; //A list of Pokémon species that gain levels at this growth rate.
}