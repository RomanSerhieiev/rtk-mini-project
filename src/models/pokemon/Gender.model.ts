import { PokemonSpeciesGender } from './PokemonSpeciesGender.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface Gender {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    pokemon_species_details: PokemonSpeciesGender[]; //A list of Pokémon species that can be this gender and how likely it is that they will be.
    required_for_evolution: NamedAPIResource[]; //A list of Pokémon species that required this gender in order for a Pokémon to evolve into them.
}