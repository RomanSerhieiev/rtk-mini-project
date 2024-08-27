import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { ContestType } from '../models/contest/ContestType.model';
import { APIResourceList } from '../models/pagination/APIResourceList.model';
import { ContestEffect } from '../models/contest/ContestEffect.model';
import { SuperContestEffect } from '../models/contest/SuperContestEffect.model';

export const contestService = {
    getAllTypes: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.contest.allTypes(offset));
        return data;
    },
    getTypeById: async (id: number): Promise<ContestType> => {
        const {data} = await apiService.get<ContestType>(url.contest.typeById(id));
        return data;
    },
    getAllEffects: async (offset: number): Promise<APIResourceList> => {
        const {data} = await apiService.get<APIResourceList>(url.contest.allEffects(offset));
        return data;
    },
    getEffectById: async (id: number): Promise<ContestEffect> => {
        const {data} = await apiService.get<ContestEffect>(url.contest.effectById(id));
        return data;
    },
    getAllSuperEffects: async (offset: number): Promise<APIResourceList> => {
        const {data} = await apiService.get<APIResourceList>(url.contest.allSuperEffects(offset));
        return data;
    },
    getSuperEffectById: async (id: number): Promise<SuperContestEffect> => {
        const {data} = await apiService.get<SuperContestEffect>(url.contest.superEffectById(id));
        return data;
    },
}