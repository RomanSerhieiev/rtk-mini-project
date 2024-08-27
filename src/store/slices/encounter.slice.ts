import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { EncounterMethod } from '../../models/encounter/EncounterMethod.model';
import { EncounterCondition } from '../../models/encounter/EncounterCondition.model';
import { EncounterConditionValue } from '../../models/encounter/EncounterConditionValue.model';
import { encounterService } from '../../services/encounter.service';
import { calculatePages } from '../../utils/calculatePages';

interface EncounterSlice {
    methods: NamedAPIResourceList | null,
    methodsPages: number,
    method: EncounterMethod | null,
    conditions: NamedAPIResourceList | null,
    conditionsPages: number,
    condition: EncounterCondition | null,
    conditionValues: NamedAPIResourceList | null,
    conditionValuesPages: number,
    conditionValue: EncounterConditionValue | null,
    error: string | null,
}

const initialState: EncounterSlice = {
    methods: null,
    methodsPages: 1,
    method: null,
    conditions: null,
    conditionsPages: 1,
    condition: null,
    conditionValues: null,
    conditionValuesPages: 1,
    conditionValue: null,
    error: null,
};

const getAllMethods = createAsyncThunk(
    'encounterSlice/getAllMethods',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await encounterService.getAllMethods(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getMethodById = createAsyncThunk(
    'encounterSlice/getMethodById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await encounterService.getMethodById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllConditions = createAsyncThunk(
    'encounterSlice/getAllConditions',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await encounterService.getAllConditions(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getConditionById = createAsyncThunk(
    'encounterSlice/getConditionById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await encounterService.getConditionById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllConditionValues = createAsyncThunk(
    'encounterSlice/getAllConditionValues',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await encounterService.getAllConditionValues(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getConditionValueById = createAsyncThunk(
    'encounterSlice/getConditionValueById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await encounterService.getConditionValueById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const encounterSlice = createSlice({
    name: 'encounterSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllMethods.fulfilled, (state, action) => {
            state.methods = action.payload;
            state.methodsPages = calculatePages(action.payload)
        })
        .addCase(getMethodById.fulfilled, (state, action) => {
            state.method = action.payload;
        })
        .addCase(getAllConditions.fulfilled, (state, action) => {
            state.conditions = action.payload;
            state.conditionsPages = calculatePages(action.payload)
        })
        .addCase(getConditionById.fulfilled, (state, action) => {
            state.condition = action.payload;
        })
        .addCase(getAllConditionValues.fulfilled, (state, action) => {
            state.conditionValues = action.payload;
            state.conditionValuesPages = calculatePages(action.payload)
        })
        .addCase(getConditionValueById.fulfilled, (state, action) => {
            state.conditionValue = action.payload;
        })
        .addMatcher(isRejected(
            getAllMethods,
            getMethodById,
            getAllConditions,
            getConditionById,
            getAllConditionValues,
            getConditionValueById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const encounterActions = {
    ...encounterSlice.actions,
    getAllMethods,
    getMethodById,
    getAllConditions,
    getConditionById,
    getAllConditionValues,
    getConditionValueById,
};