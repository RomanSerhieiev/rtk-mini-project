import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { ContestType } from '../../models/contest/ContestType.model';
import { APIResourceList } from '../../models/pagination/APIResourceList.model';
import { ContestEffect } from '../../models/contest/ContestEffect.model';
import { SuperContestEffect } from '../../models/contest/SuperContestEffect.model';
import { contestService } from '../../services/contest.service';
import { calculatePages } from '../../utils/calculatePages';

interface ContestSlice {
    types: NamedAPIResourceList | null,
    typesPages: number,
    type: ContestType | null,
    effects: APIResourceList | null,
    effectsPages: number,
    effect: ContestEffect | null,
    superEffects: APIResourceList | null,
    superEffectsPages: number,
    superEffect: SuperContestEffect | null,
    error: string | null,
}

const initialState: ContestSlice = {
    types: null,
    typesPages: 1,
    type: null,
    effects: null,
    effectsPages: 1,
    effect: null,
    superEffects: null,
    superEffectsPages: 1,
    superEffect: null,
    error: null,
};

const getAllTypes = createAsyncThunk(
    'contestSlice/getAllTypes',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await contestService.getAllTypes(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getTypeById = createAsyncThunk(
    'contestSlice/getTypeById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await contestService.getTypeById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllEffects = createAsyncThunk(
    'contestSlice/getAllEffects',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await contestService.getAllEffects(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getEffectById = createAsyncThunk(
    'contestSlice/getEffectById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await contestService.getEffectById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllSuperEffects = createAsyncThunk(
    'contestSlice/getAllSuperEffects',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await contestService.getAllSuperEffects(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getSuperEffectById = createAsyncThunk(
    'contestSlice/getSuperEffectById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await contestService.getSuperEffectById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const contestSlice = createSlice({
    name: 'contestSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllTypes.fulfilled, (state, action) => {
            state.types = action.payload;
            state.typesPages = calculatePages(action.payload)
        })
        .addCase(getTypeById.fulfilled, (state, action) => {
            state.type = action.payload;
        })
        .addCase(getAllEffects.fulfilled, (state, action) => {
            state.effects = action.payload;
            state.effectsPages = calculatePages(action.payload)
        })
        .addCase(getEffectById.fulfilled, (state, action) => {
            state.effect = action.payload;
        })
        .addCase(getAllSuperEffects.fulfilled, (state, action) => {
            state.superEffects = action.payload;
            state.superEffectsPages = calculatePages(action.payload)
        })
        .addCase(getSuperEffectById.fulfilled, (state, action) => {
            state.superEffect = action.payload;
        })
        .addMatcher(isRejected(
            getAllTypes,
            getTypeById,
            getAllEffects,
            getEffectById,
            getAllSuperEffects,
            getSuperEffectById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const contestActions = {
    ...contestSlice.actions,
    getAllTypes,
    getTypeById,
    getAllEffects,
    getEffectById,
    getAllSuperEffects,
    getSuperEffectById,
};