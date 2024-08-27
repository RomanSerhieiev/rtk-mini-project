import { NamedAPIResource } from './NamedAPIResource.model';

export interface Name {
    name: string; //The localized name for an API resource in a specific language.
    language: NamedAPIResource; //The language this name is in.
}