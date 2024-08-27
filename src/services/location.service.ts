import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { Location } from '../models/location/Location.model';
import { LocationArea } from '../models/location/LocationArea.model';
import { PalParkArea } from '../models/location/PalParkArea.model';
import { Region } from '../models/location/Region.model';

export const locationService = {
    getAll: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.location.all(offset));
        return data;
    },
    getById: async (id: number): Promise<Location> => {
        const {data} = await apiService.get<Location>(url.location.byId(id));
        return data;
    },
    getAllAreas: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.location.allAreas(offset));
        return data;
    },
    getAreaById: async (id: number): Promise<LocationArea> => {
        const {data} = await apiService.get<LocationArea>(url.location.areaById(id));
        return data;
    },
    getAllPalParkAreas: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.location.allPalParkAreas(offset));
        return data;
    },
    getPalParkAreaById: async (id: number): Promise<PalParkArea> => {
        const {data} = await apiService.get<PalParkArea>(url.location.palParkAreaById(id));
        return data;
    },
    getAllRegions: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.location.allRegions(offset));
        return data;
    },
    getRegionById: async (id: number): Promise<Region> => {
        const {data} = await apiService.get<Region>(url.location.regionById(id));
        return data;
    },
}