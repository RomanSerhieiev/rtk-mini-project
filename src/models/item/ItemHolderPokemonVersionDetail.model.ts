import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface ItemHolderPokemonVersionDetail {
    rarity: number; //How often this Pokémon holds this item in this version.
    version: NamedAPIResource; //The version that this item is held in by the Pokémon.
}