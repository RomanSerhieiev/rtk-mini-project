import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonFormType {
    slot: number; //The order the Pokémon's types are listed in.
    type: NamedAPIResource; //The type the referenced Form has.
}