import { apiService } from './api.service';
import { url } from '../constants/urls';
import { APIResourceList } from '../models/pagination/APIResourceList.model';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { EvolutionChain } from '../models/evolution/EvolutionChain.model';
import { EvolutionTrigger } from '../models/evolution/EvolutionTrigger.model';

export const evolutionService = {
    getAllChains: async (offset: number): Promise<APIResourceList> => {
        const {data} = await apiService.get<APIResourceList>(url.evolution.allChains(offset));
        return data;
    },
    getChainById: async (id: number): Promise<EvolutionChain> => {
        const {data} = await apiService.get<EvolutionChain>(url.evolution.chainById(id));
        return data;
    },
    getAllTriggers: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.evolution.allTriggers(offset));
        return data;
    },
    getTriggerById: async (id: number): Promise<EvolutionTrigger> => {
        const {data} = await apiService.get<EvolutionTrigger>(url.evolution.triggerById(id));
        return data;
    },
}