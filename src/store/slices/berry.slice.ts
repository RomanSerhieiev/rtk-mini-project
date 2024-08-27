import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { Berry } from '../../models/berry/Berry.model';
import { berryService } from '../../services/berry.service';
import { BerryFlavor } from '../../models/berry/BerryFlavor.model';
import { BerryFirmness } from '../../models/berry/BerryFirmness.model';
import { calculatePages } from '../../utils/calculatePages';

interface BerrySlice {
    berries: NamedAPIResourceList | null,
    berriesPages: number,
    berry: Berry | null,
    firmnesses: NamedAPIResourceList | null,
    firmnessesPages: number,
    firmness: BerryFirmness | null,
    flavors: NamedAPIResourceList | null,
    flavorsPages: number,
    flavor: BerryFlavor | null,
    error: string | null,
}

const initialState: BerrySlice = {
    berries: null,
    berriesPages: 1,
    berry: null,
    firmnesses: null,
    firmnessesPages: 1,
    firmness: null,
    flavors: null,
    flavorsPages: 1,
    flavor: null,
    error: null,
};

const getAll = createAsyncThunk(
    'berrySlice/getAll',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await berryService.getAll(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'berrySlice/getById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await berryService.getById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllFirmnesses = createAsyncThunk(
    'berrySlice/getAllFirmnesses',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await berryService.getAllFirmnesses(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getFirmnessById = createAsyncThunk(
    'berrySlice/getFirmnessById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await berryService.getFirmnessById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllFlavors = createAsyncThunk(
    'berrySlice/getAllFlavors',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await berryService.getAllFlavors(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getFlavorById = createAsyncThunk(
    'berrySlice/getFlavorById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await berryService.getFlavorById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const berrySlice = createSlice({
    name: 'berrySlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.berries = action.payload;
            state.berriesPages = calculatePages(action.payload)
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.berry = action.payload;
        })
        .addCase(getAllFirmnesses.fulfilled, (state, action) => {
            state.firmnesses = action.payload;
            state.firmnessesPages = calculatePages(action.payload)
        })
        .addCase(getFirmnessById.fulfilled, (state, action) => {
            state.firmness = action.payload;
        })
        .addCase(getAllFlavors.fulfilled, (state, action) => {
            state.flavors = action.payload;
            state.flavorsPages = calculatePages(action.payload)
        })
        .addCase(getFlavorById.fulfilled, (state, action) => {
            state.flavor = action.payload;
        })
        .addMatcher(isRejected(
            getAll,
            getById,
            getAllFirmnesses,
            getFirmnessById,
            getAllFlavors,
            getFlavorById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const berryActions = {
    ...berrySlice.actions,
    getAll,
    getById,
    getAllFirmnesses,
    getFirmnessById,
    getAllFlavors,
    getFlavorById,
};