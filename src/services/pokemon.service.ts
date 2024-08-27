import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { Ability } from '../models/pokemon/Ability.model';
import { APIResourceList } from '../models/pagination/APIResourceList.model';
import { Characteristic } from '../models/pokemon/Characteristic.model';
import { EggGroup } from '../models/pokemon/EggGroup.model';
import { Gender } from '../models/pokemon/Gender.model';
import { GrowthRate } from '../models/pokemon/GrowthRate.model';
import { Nature } from '../models/pokemon/Nature.model';
import { PokeathlonStat } from '../models/pokemon/PokeathlonStat.model';
import { Pokemon } from '../models/pokemon/Pokemon.model';
import { PokemonColor } from '../models/pokemon/PokemonColor.model';
import { PokemonForm } from '../models/pokemon/PokemonForm.model';
import { PokemonHabitat } from '../models/pokemon/PokemonHabitat.model';
import { PokemonShape } from '../models/pokemon/PokemonShape.model';
import { PokemonSpecies } from '../models/pokemon/PokemonSpecies.model';
import { Stat } from '../models/pokemon/Stat.model';
import { Type } from '../models/pokemon/Type.model';

export const pokemonService = {
    getAll: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.all(offset));
        return data;
    },
    getById: async (id: string): Promise<Pokemon> => {
        const {data} = await apiService.get<Pokemon>(url.pokemon.byId(id));
        return data;
    },
    getAllAbilities: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allAbilities(offset));
        return data;
    },
    getAbilityById: async (id: string): Promise<Ability> => {
        const {data} = await apiService.get<Ability>(url.pokemon.abilityById(id));
        return data;
    },
    getAllCharacteristics: async (offset: number): Promise<APIResourceList> => {
        const {data} = await apiService.get<APIResourceList>(url.pokemon.allCharacteristics(offset));
        return data;
    },
    getCharacteristicById: async (id: number): Promise<Characteristic> => {
        const {data} = await apiService.get<Characteristic>(url.pokemon.characteristicById(id));
        return data;
    },
    getAllEggGroups: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allEggGroups(offset));
        return data;
    },
    getEggGroupById: async (id: number): Promise<EggGroup> => {
        const {data} = await apiService.get<EggGroup>(url.pokemon.eggGroupById(id));
        return data;
    },
    getAllGenders: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allGenders(offset));
        return data;
    },
    getGenderById: async (id: number): Promise<Gender> => {
        const {data} = await apiService.get<Gender>(url.pokemon.genderById(id));
        return data;
    },
    getAllGrowthRates: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allGrowthRates(offset));
        return data;
    },
    getGrowthRateById: async (id: number): Promise<GrowthRate> => {
        const {data} = await apiService.get<GrowthRate>(url.pokemon.growthRateById(id));
        return data;
    },
    getAllNatures: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allNatures(offset));
        return data;
    },
    getNatureById: async (id: number): Promise<Nature> => {
        const {data} = await apiService.get<Nature>(url.pokemon.natureById(id));
        return data;
    },
    getAllPokeathlonStats: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allPokeathlonStats(offset));
        return data;
    },
    getPokeathlonStatById: async (id: number): Promise<PokeathlonStat> => {
        const {data} = await apiService.get<PokeathlonStat>(url.pokemon.pokeathlonStatById(id));
        return data;
    },
    getAllEncountersById: async (id: number, offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allEncountersById(id, offset));
        return data;
    },
    getAllColors: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allColors(offset));
        return data;
    },
    getColorById: async (id: number): Promise<PokemonColor> => {
        const {data} = await apiService.get<PokemonColor>(url.pokemon.colorById(id));
        return data;
    },
    getAllForms: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allForms(offset));
        return data;
    },
    getFormById: async (id: number): Promise<PokemonForm> => {
        const {data} = await apiService.get<PokemonForm>(url.pokemon.formById(id));
        return data;
    },
    getAllHabitats: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allHabitats(offset));
        return data;
    },
    getHabitatById: async (id: number): Promise<PokemonHabitat> => {
        const {data} = await apiService.get<PokemonHabitat>(url.pokemon.habitatById(id));
        return data;
    },
    getAllShapes: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allShapes(offset));
        return data;
    },
    getShapeById: async (id: number): Promise<PokemonShape> => {
        const {data} = await apiService.get<PokemonShape>(url.pokemon.shapeById(id));
        return data;
    },
    getAllSpecies: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allSpecies(offset));
        return data;
    },
    getSpecieById: async (id: number): Promise<PokemonSpecies> => {
        const {data} = await apiService.get<PokemonSpecies>(url.pokemon.specieById(id));
        return data;
    },
    getAllStats: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allStats(offset));
        return data;
    },
    getStatById: async (id: number): Promise<Stat> => {
        const {data} = await apiService.get<Stat>(url.pokemon.statById(id));
        return data;
    },
    getAllTypes: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.pokemon.allTypes(offset));
        return data;
    },
    getTypeById: async (id: string): Promise<Type> => {
        const {data} = await apiService.get<Type>(url.pokemon.typeById(id));
        return data;
    },
}