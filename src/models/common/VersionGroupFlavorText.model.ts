import { NamedAPIResource } from './NamedAPIResource.model';

export interface VersionGroupFlavorText {
    text: string; //The localized name for an API resource in a specific language.
    language: NamedAPIResource; //The language this name is in.
    version_group: NamedAPIResource; //The version group which uses this flavor text.
}