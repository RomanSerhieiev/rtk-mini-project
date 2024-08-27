import { NamedAPIResource } from './NamedAPIResource.model';

export interface FlavorText {
    flavor_text: string; //The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this issue to find out more.
    language: NamedAPIResource; //The language this name is in.
    version: NamedAPIResource; //The game version this flavor text is extracted from.
}