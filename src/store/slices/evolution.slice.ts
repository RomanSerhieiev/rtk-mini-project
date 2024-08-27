import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { APIResourceList } from '../../models/pagination/APIResourceList.model';
import { EvolutionChain } from '../../models/evolution/EvolutionChain.model';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { EvolutionTrigger } from '../../models/evolution/EvolutionTrigger.model';
import { evolutionService } from '../../services/evolution.service';
import { calculatePages } from '../../utils/calculatePages';

interface EvolutionSlice {
    chains: APIResourceList | null,
    chainsPages: number,
    chain: EvolutionChain | null,
    triggers: NamedAPIResourceList | null,
    triggersPages: number,
    trigger: EvolutionTrigger | null,
    error: string | null,
}

const initialState: EvolutionSlice = {
    chains: null,
    chainsPages: 1,
    chain: null,
    triggers: null,
    triggersPages: 1,
    trigger: null,
    error: null,
};

const getAllChains = createAsyncThunk(
    'evolutionSlice/getAllChains',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await evolutionService.getAllChains(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getChainById = createAsyncThunk(
    'evolutionSlice/getChainById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await evolutionService.getChainById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllTriggers = createAsyncThunk(
    'evolutionSlice/getAllTriggers',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await evolutionService.getAllTriggers(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getTriggerById = createAsyncThunk(
    'evolutionSlice/getTriggerById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await evolutionService.getTriggerById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const evolutionSlice = createSlice({
    name: 'evolutionSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllChains.fulfilled, (state, action) => {
            state.chains = action.payload;
            state.chainsPages = calculatePages(action.payload)
        })
        .addCase(getChainById.fulfilled, (state, action) => {
            state.chain = action.payload;
        })
        .addCase(getAllTriggers.fulfilled, (state, action) => {
            state.triggers = action.payload;
            state.triggersPages = calculatePages(action.payload)
        })
        .addCase(getTriggerById.fulfilled, (state, action) => {
            state.trigger = action.payload;
        })
        .addMatcher(isRejected(
            getAllChains,
            getChainById,
            getAllTriggers,
            getTriggerById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const evolutionActions = {
    ...evolutionSlice.actions,
    getAllChains,
    getChainById,
    getAllTriggers,
    getTriggerById,
};