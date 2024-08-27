import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { EvolutionDetail } from './EvolutionDetail.model';

export interface ChainLink {
    is_baby: boolean; //Whether or not this link is for a baby Pokémon. This would only ever be true on the base link.
    species: NamedAPIResource; //The Pokémon species at this point in the evolution chain.
    evolution_details: EvolutionDetail[]; //All details regarding the specific details of the referenced Pokémon species evolution.
    evolves_to: ChainLink[]; //A List of chain objects.
}