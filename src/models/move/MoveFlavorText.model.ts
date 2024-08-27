import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface MoveFlavorText {
    flavor_text: string; //The localized flavor text for an api resource in a specific language.
    language: NamedAPIResource; //The language this name is in.
    version_group: NamedAPIResource; //The version group that uses this flavor text.
}