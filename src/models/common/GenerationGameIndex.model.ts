import { NamedAPIResource } from './NamedAPIResource.model';

export interface GenerationGameIndex {
    game_index: number; //he internal id of an API resource within game data.
    generation: NamedAPIResource; //The generation relevent to this game index.
}