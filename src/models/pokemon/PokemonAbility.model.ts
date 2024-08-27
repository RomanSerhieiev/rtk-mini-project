import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonAbility {
    is_hidden: boolean; //Whether or not this is a hidden ability.
    slot: number; //The slot this ability occupies in this Pokémon species.
    ability: NamedAPIResource; //The ability the Pokémon may have.
}