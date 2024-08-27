import { apiService } from './api.service';
import { url } from '../constants/urls';
import { APIResourceList } from '../models/pagination/APIResourceList.model';
import { Machine } from '../models/machine/Machine.model';

export const machineService = {
    getAll: async (offset: number): Promise<APIResourceList> => {
        const {data} = await apiService.get<APIResourceList>(url.machine.all(offset));
        return data;
    },
    getById: async (id: number): Promise<Machine> => {
        const {data} = await apiService.get<Machine>(url.machine.byId(id));
        return data;
    },
}