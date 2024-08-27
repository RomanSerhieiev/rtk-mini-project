import { TypeRelations } from './TypeRelations.model';
import { TypeRelationsPast } from './TypeRelationsPast.model';
import { GenerationGameIndex } from '../common/GenerationGameIndex.model';
import { NamedAPIResource } from '../common/NamedAPIResource.model';
import { Name } from '../common/Name.model';
import { TypePokemon } from './TypePokemon.model';

export interface Type {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    damage_relations: TypeRelations; //A detail of how effective this type is toward others and vice versa.
    past_damage_relations: TypeRelationsPast[]; //A list of details of how effective this type was toward others and vice versa in previous generations
    game_indices: GenerationGameIndex[]; //A list of game indices relevent to this item by generation.
    generation: NamedAPIResource; //The generation this type was introduced in.
    move_damage_class: NamedAPIResource; //The class of damage inflicted by this type.
    names: Name[]; //The name of this resource listed in different languages.
    pokemon: TypePokemon[]; //A list of details of Pokémon that have this type.
    moves: NamedAPIResource[]; //A list of moves that have this type.
}