import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { Berry } from '../models/berry/Berry.model';
import { BerryFirmness } from '../models/berry/BerryFirmness.model';
import { BerryFlavor } from '../models/berry/BerryFlavor.model';

export const berryService = {
    getAll: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.berry.all(offset));
        return data;
    },
    getById: async (id: number): Promise<Berry> => {
        const {data} = await apiService.get<Berry>(url.berry.byId(id));
        return data;
    },
    getAllFirmnesses: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.berry.allFirmnesses(offset));
        return data;
    },
    getFirmnessById: async (id: number): Promise<BerryFirmness> => {
        const {data} = await apiService.get<BerryFirmness>(url.berry.firmnessById(id));
        return data;
    },
    getAllFlavors: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.berry.allFlavors(offset));
        return data;
    },
    getFlavorById: async (id: number): Promise<BerryFlavor> => {
        const {data} = await apiService.get<BerryFlavor>(url.berry.flavorById(id));
        return data;
    },
}