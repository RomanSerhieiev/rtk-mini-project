import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonHeldItemVersion {
    version: NamedAPIResource; //The version in which the item is held.
    rarity: number; //How often the item is held.
}