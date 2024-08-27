import { NamedAPIResource } from '../common/NamedAPIResource.model';

export interface PalParkEncounterArea {
    base_score: number; //The base score given to the player when the referenced Pokémon is caught during a pal park run.
    rate: number; //The base rate for encountering the referenced Pokémon in this pal park area.
    area: NamedAPIResource; //The pal park area where this encounter happens.
}