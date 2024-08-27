import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { ChainLink } from './ChainLink.model';

export interface EvolutionChain {
    id: number; //The identifier for this resource.
    baby_trigger_item: NamedAPIResource; //The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon.
    chain: ChainLink; //The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order.
}