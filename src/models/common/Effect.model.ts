import { NamedAPIResource } from './NamedAPIResource.model';

export interface Effect {
    effect: string; //The localized effect text for an API resource in a specific language.
    language: NamedAPIResource; //The language this effect is in.
}