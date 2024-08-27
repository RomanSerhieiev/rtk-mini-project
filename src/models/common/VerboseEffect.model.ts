import { NamedAPIResource } from './NamedAPIResource.model';

export interface VerboseEffect {
    effect: string; //The localized effect text for an API resource in a specific language.
    short_effect: string; //The localized effect text in brief.
    language: NamedAPIResource; //The language this effect is in.
}