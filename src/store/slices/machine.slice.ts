import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Machine } from '../../models/machine/Machine.model';
import { machineService } from '../../services/machine.service';
import { APIResourceList } from '../../models/pagination/APIResourceList.model';
import { calculatePages } from '../../utils/calculatePages';

interface MachineSlice {
    machines: APIResourceList | null,
    machinesPages: number,
    machine: Machine | null,
    error: string | null,
}

const initialState: MachineSlice = {
    machines: null,
    machinesPages: 1,
    machine: null,
    error: null,
};

const getAll = createAsyncThunk(
    'machineSlice/getAll',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await machineService.getAll(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'machineSlice/getById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await machineService.getById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const machineSlice = createSlice({
    name: 'machineSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.machines = action.payload;
            state.machinesPages = calculatePages(action.payload)
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.machine = action.payload;
        })
        .addMatcher(isRejected(getAll, getById), (state, action) => {
            state.error = action.payload as string;
        })
});

export const machineActions = {
    ...machineSlice.actions,
    getAll,
    getById,
};