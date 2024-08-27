import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { TypeRelations } from './TypeRelations.model';

export interface TypeRelationsPast {
    generation: NamedAPIResource; //The last generation in which the referenced type had the listed damage relations
    damage_relations: TypeRelations; //The damage relations the referenced type had up to and including the listed generation
}