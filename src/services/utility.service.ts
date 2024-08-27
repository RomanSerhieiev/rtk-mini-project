import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { Language } from '../models/utility/Language.model';

export const utilityService = {
    getAllLanguages: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.utility.allLanguages(offset));
        return data;
    },
    getLanguageById: async (id: number): Promise<Language> => {
        const {data} = await apiService.get<Language>(url.utility.languageById(id));
        return data;
    },
}