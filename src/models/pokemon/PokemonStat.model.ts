import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PokemonStat {
    stat: NamedAPIResource; //The stat the Pokémon has.
    effort: number; //The effort points (EV) the Pokémon has in the stat.
    base_stat: number; //The base value of the stat.
}