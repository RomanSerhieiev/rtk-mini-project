import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { Move } from '../../models/move/Move.model';
import { MoveAilment } from '../../models/move/MoveAilment.model';
import { MoveBattleStyle } from '../../models/move/MoveBattleStyle.model';
import { MoveCategory } from '../../models/move/MoveCategory.model';
import { MoveDamageClass } from '../../models/move/MoveDamageClass.model';
import { MoveLearnMethod } from '../../models/move/MoveLearnMethod.model';
import { MoveTarget } from '../../models/move/MoveTarget.model';
import { moveService } from '../../services/move.service';
import { calculatePages } from '../../utils/calculatePages';

interface MoveSlice {
    moves: NamedAPIResourceList | null,
    movesPages: number,
    move: Move | null,
    ailments: NamedAPIResourceList | null,
    ailmentsPages: number,
    ailment: MoveAilment | null,
    battleStyles: NamedAPIResourceList | null,
    battleStylesPages: number,
    battleStyle: MoveBattleStyle | null,
    categories: NamedAPIResourceList | null,
    categoriesPages: number,
    category: MoveCategory | null,
    damageClasses: NamedAPIResourceList | null,
    damageClassesPages: number,
    damageClass: MoveDamageClass | null,
    learnMethods: NamedAPIResourceList | null,
    learnMethodsPages: number,
    learnMethod: MoveLearnMethod | null,
    targets: NamedAPIResourceList | null,
    targetsPages: number,
    target: MoveTarget | null,
    error: string | null,
}

const initialState: MoveSlice = {
    moves: null,
    movesPages: 1,
    move: null,
    ailments: null,
    ailmentsPages: 1,
    ailment: null,
    battleStyles: null,
    battleStylesPages: 1,
    battleStyle: null,
    categories: null,
    categoriesPages: 1,
    category: null,
    damageClasses: null,
    damageClassesPages: 1,
    damageClass: null,
    learnMethods: null,
    learnMethodsPages: 1,
    learnMethod: null,
    targets: null,
    targetsPages: 1,
    target: null,
    error: null,
};

const getAll = createAsyncThunk(
    'moveSlice/getAll',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAll(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'moveSlice/getById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllAilments = createAsyncThunk(
    'moveSlice/getAllAilments',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAllAilments(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAilmentById = createAsyncThunk(
    'moveSlice/getAilmentById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAilmentById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllBattleStyles = createAsyncThunk(
    'moveSlice/getAllBattleStyles',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAllBattleStyles(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getBattleStyleById = createAsyncThunk(
    'moveSlice/getBattleStyleById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getBattleStyleById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllCategories = createAsyncThunk(
    'moveSlice/getAllCategories',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAllCategories(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getCategoryById = createAsyncThunk(
    'moveSlice/getCategoryById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getCategoryById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllDamageClasses = createAsyncThunk(
    'moveSlice/getAllDamageClasses',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAllDamageClasses(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getDamageClassById = createAsyncThunk(
    'moveSlice/getDamageClassById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getDamageClassById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllLearnMethods = createAsyncThunk(
    'moveSlice/getAllLearnMethods',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAllLearnMethods(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getLearnMethodById = createAsyncThunk(
    'moveSlice/getLearnMethodById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getLearnMethodById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllTargets = createAsyncThunk(
    'moveSlice/getAllTargets',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getAllTargets(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getTargetById = createAsyncThunk(
    'moveSlice/getTargetById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moveService.getTargetById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const moveSlice = createSlice({
    name: 'moveSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.moves = action.payload;
            state.movesPages = calculatePages(action.payload)
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.move = action.payload;
        })
        .addCase(getAllAilments.fulfilled, (state, action) => {
            state.ailments = action.payload;
            state.ailmentsPages = calculatePages(action.payload)
        })
        .addCase(getAilmentById.fulfilled, (state, action) => {
            state.ailment = action.payload;
        })
        .addCase(getAllBattleStyles.fulfilled, (state, action) => {
            state.battleStyles = action.payload;
            state.battleStylesPages = calculatePages(action.payload)
        })
        .addCase(getBattleStyleById.fulfilled, (state, action) => {
            state.battleStyle = action.payload;
        })
        .addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.categoriesPages = calculatePages(action.payload)
        })
        .addCase(getCategoryById.fulfilled, (state, action) => {
            state.category = action.payload;
        })
        .addCase(getAllDamageClasses.fulfilled, (state, action) => {
            state.damageClasses = action.payload;
            state.damageClassesPages = calculatePages(action.payload)
        })
        .addCase(getDamageClassById.fulfilled, (state, action) => {
            state.damageClass = action.payload;
        })
        .addCase(getAllLearnMethods.fulfilled, (state, action) => {
            state.learnMethods = action.payload;
            state.learnMethodsPages = calculatePages(action.payload)
        })
        .addCase(getLearnMethodById.fulfilled, (state, action) => {
            state.learnMethod = action.payload;
        })
        .addCase(getAllTargets.fulfilled, (state, action) => {
            state.targets = action.payload;
            state.targetsPages = calculatePages(action.payload)
        })
        .addCase(getTargetById.fulfilled, (state, action) => {
            state.target = action.payload;
        })
        .addMatcher(isRejected(
            getAll,
            getById,
            getAllAilments,
            getAilmentById,
            getAllBattleStyles,
            getBattleStyleById,
            getAllCategories,
            getCategoryById,
            getAllDamageClasses,
            getDamageClassById,
            getAllLearnMethods,
            getLearnMethodById,
            getAllTargets,
            getTargetById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const moveActions = {
    ...moveSlice.actions,
    getAll,
    getById,
    getAllAilments,
    getAilmentById,
    getAllBattleStyles,
    getBattleStyleById,
    getAllCategories,
    getCategoryById,
    getAllDamageClasses,
    getDamageClassById,
    getAllLearnMethods,
    getLearnMethodById,
    getAllTargets,
    getTargetById,
};