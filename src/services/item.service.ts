import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { Item } from '../models/item/Item.model';
import { ItemAttribute } from '../models/item/ItemAttribute.model';
import { ItemCategory } from '../models/item/ItemCategory.model';
import { ItemFlingEffect } from '../models/item/ItemFlingEffect.model';
import { ItemPocket } from '../models/item/ItemPocket.model';

export const itemService = {
    getAll: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.item.all(offset));
        return data;
    },
    getById: async (id: number): Promise<Item> => {
        const {data} = await apiService.get<Item>(url.item.byId(id));
        return data;
    },
    getAllAttributes: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.item.allAttributes(offset));
        return data;
    },
    getAttributeById: async (id: number): Promise<ItemAttribute> => {
        const {data} = await apiService.get<ItemAttribute>(url.item.attributeById(id));
        return data;
    },
    getAllCategories: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.item.allCategories(offset));
        return data;
    },
    getCategoryById: async (id: number): Promise<ItemCategory> => {
        const {data} = await apiService.get<ItemCategory>(url.item.categoryById(id));
        return data;
    },
    getAllFlingEffects: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.item.allFlingEffects(offset));
        return data;
    },
    getFlingEffectById: async (id: number): Promise<ItemFlingEffect> => {
        const {data} = await apiService.get<ItemFlingEffect>(url.item.flingEffectById(id));
        return data;
    },
    getAllPockets: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.item.allPockets(offset));
        return data;
    },
    getPocketById: async (id: number): Promise<ItemPocket> => {
        const {data} = await apiService.get<ItemPocket>(url.item.pocketById(id));
        return data;
    },
}