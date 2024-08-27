import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface AbilityPokemon {
    is_hidden: boolean; //Whether or not this a hidden ability for the referenced Pokémon.
    slot: number; //Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon.
    pokemon: NamedAPIResource; //The Pokémon this ability could belong to.
}