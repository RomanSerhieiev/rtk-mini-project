import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { EncounterMethod } from '../models/encounter/EncounterMethod.model';
import { EncounterCondition } from '../models/encounter/EncounterCondition.model';
import { EncounterConditionValue } from '../models/encounter/EncounterConditionValue.model';

export const encounterService = {
    getAllMethods: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.encounter.allMethods(offset));
        return data;
    },
    getMethodById: async (id: number): Promise<EncounterMethod> => {
        const {data} = await apiService.get<EncounterMethod>(url.encounter.methodById(id));
        return data;
    },
    getAllConditions: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.encounter.allConditions(offset));
        return data;
    },
    getConditionById: async (id: number): Promise<EncounterCondition> => {
        const {data} = await apiService.get<EncounterCondition>(url.encounter.conditionById(id));
        return data;
    },
    getAllConditionValues: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.encounter.allConditionValues(offset));
        return data;
    },
    getConditionValueById: async (id: number): Promise<EncounterConditionValue> => {
        const {data} = await apiService.get<EncounterConditionValue>(url.encounter.conditionValueById(id));
        return data;
    },
}