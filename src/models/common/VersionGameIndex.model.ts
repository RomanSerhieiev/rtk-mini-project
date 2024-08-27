import { NamedAPIResource } from './NamedAPIResource.model';

export interface VersionGameIndex {
    game_index: number; //The internal id of an API resource within game data.
    version: NamedAPIResource; //The version relevent to this game index.
}