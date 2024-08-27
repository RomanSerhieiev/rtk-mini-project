import { NamedAPIResource } from './NamedAPIResource.model';

export interface Description {
    description: string; //The localized description for an API resource in a specific language.
    language: NamedAPIResource; //The language this name is in.
}