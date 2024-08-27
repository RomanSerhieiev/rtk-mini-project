import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { PokemonHeldItemVersion } from './PokemonHeldItemVersion.model';

export interface PokemonHeldItem {
    item: NamedAPIResource; //The item the referenced Pokémon holds.
    version_details: PokemonHeldItemVersion[]; //The details of the different versions in which the item is held.
}