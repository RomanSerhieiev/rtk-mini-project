import { NamedAPIResource } from './NamedAPIResource.model';

export interface Encounter {
    min_level: number; //The lowest level the Pokémon could be encountered at.
    max_level: number; //The highest level the Pokémon could be encountered at.
    condition_values: NamedAPIResource[]; //A list of condition values that must be in effect for this encounter to occur.
    chance: number; //Percent chance that this encounter will occur.
    method: NamedAPIResource; //The method by which this encounter happens.
}