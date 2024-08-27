import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface AwesomeName {
    awesome_name: string; //The localized "scientific" name for an API resource in a specific language.
    language: NamedAPIResource; //The language this "scientific" name is in.
}