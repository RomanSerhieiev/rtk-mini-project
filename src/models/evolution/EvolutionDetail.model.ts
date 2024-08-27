import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface EvolutionDetail {
    item: NamedAPIResource; //The item required to cause evolution this into Pokémon species.
    trigger: NamedAPIResource; //The type of event that triggers evolution into this Pokémon species.
    gender: number; //The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species.
    held_item: NamedAPIResource; //The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species.
    known_move: NamedAPIResource; //The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species.
    known_move_type: NamedAPIResource; //The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species.
    location: NamedAPIResource; //The location the evolution must be triggered at.
    min_level: number; //The minimum required level of the evolving Pokémon species to evolve into this Pokémon species.
    min_happiness: number; //The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species.
    min_beauty: number; //The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species.
    min_affection: number; //The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species.
    needs_overworld_rain: boolean; //Whether or not it must be raining in the overworld to cause evolution this Pokémon species.
    party_species: NamedAPIResource; //The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species.
    party_type: NamedAPIResource; //The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species.
    relative_physical_stats: number; //The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense.
    time_of_day: string; //The required time of day. Day or night.
    trade_species: NamedAPIResource; //Pokémon species for which this one must be traded.
    turn_upside_down: boolean; //Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.
}