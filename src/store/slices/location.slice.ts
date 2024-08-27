import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { Location } from '../../models/location/Location.model';
import { LocationArea } from '../../models/location/LocationArea.model';
import { PalParkArea } from '../../models/location/PalParkArea.model';
import { Region } from '../../models/location/Region.model';
import { locationService } from '../../services/location.service';
import { calculatePages } from '../../utils/calculatePages';

interface LocationSlice {
    locations: NamedAPIResourceList | null,
    locationsPages: number,
    location: Location | null,
    areas: NamedAPIResourceList | null,
    areasPages: number,
    area: LocationArea | null,
    palParkAreas: NamedAPIResourceList | null,
    palParkAreasPages: number,
    palParkArea: PalParkArea | null,
    regions: NamedAPIResourceList | null,
    regionsPages: number,
    region: Region | null,
    error: string | null,
}

const initialState: LocationSlice = {
    locations: null,
    locationsPages: 1,
    location: null,
    areas: null,
    areasPages: 1,
    area: null,
    palParkAreas: null,
    palParkAreasPages: 1,
    palParkArea: null,
    regions: null,
    regionsPages: 1,
    region: null,
    error: null,
};

const getAll = createAsyncThunk(
    'locationSlice/getAll',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getAll(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'locationSlice/getById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllAreas = createAsyncThunk(
    'locationSlice/getAllAreas',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getAllAreas(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAreaById = createAsyncThunk(
    'locationSlice/getAreaById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getAreaById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllPalParkAreas = createAsyncThunk(
    'locationSlice/getAllPalParkAreas',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getAllPalParkAreas(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getPalParkAreaById = createAsyncThunk(
    'locationSlice/getPalParkAreaById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getPalParkAreaById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllRegions = createAsyncThunk(
    'locationSlice/getAllRegions',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getAllRegions(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getRegionById = createAsyncThunk(
    'locationSlice/getRegionById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await locationService.getRegionById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const locationSlice = createSlice({
    name: 'locationSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.locations = action.payload;
            state.locationsPages = calculatePages(action.payload)
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.location = action.payload;
        })
        .addCase(getAllAreas.fulfilled, (state, action) => {
            state.areas = action.payload;
            state.areasPages = calculatePages(action.payload)
        })
        .addCase(getAreaById.fulfilled, (state, action) => {
            state.area = action.payload;
        })
        .addCase(getAllPalParkAreas.fulfilled, (state, action) => {
            state.palParkAreas = action.payload;
            state.palParkAreasPages = calculatePages(action.payload)
        })
        .addCase(getPalParkAreaById.fulfilled, (state, action) => {
            state.palParkArea = action.payload;
        })
        .addCase(getAllRegions.fulfilled, (state, action) => {
            state.regions = action.payload;
            state.regionsPages = calculatePages(action.payload)
        })
        .addCase(getRegionById.fulfilled, (state, action) => {
            state.region = action.payload;
        })
        .addMatcher(isRejected(
            getAll,
            getById,
            getAllAreas,
            getAreaById,
            getAllPalParkAreas,
            getPalParkAreaById,
            getAllRegions,
            getRegionById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const locationActions = {
    ...locationSlice.actions,
    getAll,
    getById,
    getAllAreas,
    getAreaById,
    getAllPalParkAreas,
    getPalParkAreaById,
    getAllRegions,
    getRegionById,
};