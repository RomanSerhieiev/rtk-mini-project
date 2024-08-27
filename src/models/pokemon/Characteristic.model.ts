import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Description } from '../common/Description.model';

export interface Characteristic {
    id: number; //The identifier for this resource.
    gene_modulo: number; //The remainder of the highest stat/IV divided by 5.
    possible_values: number[]; //The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5.
    highest_stat: NamedAPIResource; //The stat which results in this characteristic.
    descriptions: Description[]; //The descriptions of this characteristic listed in different languages.
}