import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonSpeciesGender {
    rate: number; //The chance of this Pokémon being female, in eighths; or -1 for genderless.
    pokemon_species: NamedAPIResource; //A Pokémon species that can be the referenced gender.
}