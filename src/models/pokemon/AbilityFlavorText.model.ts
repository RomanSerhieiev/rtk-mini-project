import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface AbilityFlavorText {
    flavor_text: string; //The localized name for an API resource in a specific language.
    language: NamedAPIResource; //The language this text resource is in.
    version_group: NamedAPIResource; //The version group that uses this flavor text.
}