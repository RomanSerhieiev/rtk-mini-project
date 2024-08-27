import { apiService } from './api.service';
import { url } from '../constants/urls';
import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { Move } from '../models/move/Move.model';
import { MoveAilment } from '../models/move/MoveAilment.model';
import { MoveBattleStyle } from '../models/move/MoveBattleStyle.model';
import { MoveCategory } from '../models/move/MoveCategory.model';
import { MoveDamageClass } from '../models/move/MoveDamageClass.model';
import { MoveLearnMethod } from '../models/move/MoveLearnMethod.model';
import { MoveTarget } from '../models/move/MoveTarget.model';

export const moveService = {
    getAll: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.move.all(offset));
        return data;
    },
    getById: async (id: number): Promise<Move> => {
        const {data} = await apiService.get<Move>(url.move.byId(id));
        return data;
    },
    getAllAilments: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.move.allAilments(offset));
        return data;
    },
    getAilmentById: async (id: number): Promise<MoveAilment> => {
        const {data} = await apiService.get<MoveAilment>(url.move.ailmentById(id));
        return data;
    },
    getAllBattleStyles: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.move.allBattleStyles(offset));
        return data;
    },
    getBattleStyleById: async (id: number): Promise<MoveBattleStyle> => {
        const {data} = await apiService.get<MoveBattleStyle>(url.move.battleStyleById(id));
        return data;
    },
    getAllCategories: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.move.allCategories(offset));
        return data;
    },
    getCategoryById: async (id: number): Promise<MoveCategory> => {
        const {data} = await apiService.get<MoveCategory>(url.move.categoryById(id));
        return data;
    },
    getAllDamageClasses: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.move.allDamageClasses(offset));
        return data;
    },
    getDamageClassById: async (id: number): Promise<MoveDamageClass> => {
        const {data} = await apiService.get<MoveDamageClass>(url.move.damageClassById(id));
        return data;
    },
    getAllLearnMethods: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.move.allLearnMethods(offset));
        return data;
    },
    getLearnMethodById: async (id: number): Promise<MoveLearnMethod> => {
        const {data} = await apiService.get<MoveLearnMethod>(url.move.learnMethodById(id));
        return data;
    },
    getAllTargets: async (offset: number): Promise<NamedAPIResourceList> => {
        const {data} = await apiService.get<NamedAPIResourceList>(url.move.allTargets(offset));
        return data;
    },
    getTargetById: async (id: number): Promise<MoveTarget> => {
        const {data} = await apiService.get<MoveTarget>(url.move.targetById(id));
        return data;
    },
}