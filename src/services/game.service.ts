import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { Generation } from '../models/game/Generation.model';
import { Pokedex } from '../models/game/Pokedex.model';
import { Version } from '../models/game/Version.model';
import { VersionGroup } from '../models/game/VersionGroup.model';

export const gameService = {
    getAllGenerations: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.game.allGenerations(offset));
        return data;
    },
    getGenerationById: async (id: number): Promise<Generation> => {
        const {data} = await apiService.get<Generation>(url.game.generationById(id));
        return data;
    },
    getAllPokedexes: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.game.allPokedexes(offset));
        return data;
    },
    getPokedexById: async (id: number): Promise<Pokedex> => {
        const {data} = await apiService.get<Pokedex>(url.game.pokedexById(id));
        return data;
    },
    getAllVersions: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.game.allVersions(offset));
        return data;
    },
    getVersionById: async (id: number): Promise<Version> => {
        const {data} = await apiService.get<Version>(url.game.versionById(id));
        return data;
    },
    getAllVersionGroups: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.game.allVersionGroups(offset));
        return data;
    },
    getVersionGroupById: async (id: number): Promise<VersionGroup> => {
        const {data} = await apiService.get<VersionGroup>(url.game.versionGroupById(id));
        return data;
    },
}