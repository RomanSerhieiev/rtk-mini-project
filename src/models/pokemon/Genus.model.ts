import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface Genus {
    genus: string; //The localized genus for the referenced Pokémon species
    language: NamedAPIResource; //The language this genus is in.
}