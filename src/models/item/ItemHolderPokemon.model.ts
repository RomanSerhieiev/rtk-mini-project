import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface ItemHolderPokemon {
    pokemon: NamedAPIResource; //The Pokémon that holds this item.
    version_details: ItemHolderPokemon[]; //The details for the version that this item is held in by the Pokémon.
}