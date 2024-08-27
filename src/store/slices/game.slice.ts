import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { Generation } from '../../models/game/Generation.model';
import { Pokedex } from '../../models/game/Pokedex.model';
import { Version } from '../../models/game/Version.model';
import { VersionGroup } from '../../models/game/VersionGroup.model';
import { gameService } from '../../services/game.service';
import { calculatePages } from '../../utils/calculatePages';

interface GameSlice {
    generations: NamedAPIResourceList | null,
    generationsPages: number,
    generation: Generation | null,
    pokedexes: NamedAPIResourceList | null,
    pokedexesPages: number,
    pokedex: Pokedex | null,
    versions: NamedAPIResourceList | null,
    versionsPages: number,
    version: Version | null,
    versionGroups: NamedAPIResourceList | null,
    versionGroupsPages: number,
    versionGroup: VersionGroup | null,
    error: string | null,
}

const initialState: GameSlice = {
    generations: null,
    generationsPages: 1,
    generation: null,
    pokedexes: null,
    pokedexesPages: 1,
    pokedex: null,
    versions: null,
    versionsPages: 1,
    version: null,
    versionGroups: null,
    versionGroupsPages: 1,
    versionGroup: null,
    error: null,
};

const getAllGenerations = createAsyncThunk(
    'gameSlice/getAllGenerations',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getAllGenerations(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getGenerationById = createAsyncThunk(
    'gameSlice/getGenerationById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getGenerationById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllPokedexes = createAsyncThunk(
    'gameSlice/getAllPokedexes',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getAllPokedexes(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getPokedexById = createAsyncThunk(
    'gameSlice/getPokedexById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getPokedexById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllVersions = createAsyncThunk(
    'gameSlice/getAllVersions',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getAllVersions(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getVersionById = createAsyncThunk(
    'gameSlice/getVersionById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getVersionById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllVersionGroups = createAsyncThunk(
    'gameSlice/getAllVersionGroups',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getAllVersionGroups(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getVersionGroupById = createAsyncThunk(
    'gameSlice/getVersionGroupById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await gameService.getVersionGroupById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllGenerations.fulfilled, (state, action) => {
            state.generations = action.payload;
            state.generationsPages = calculatePages(action.payload)
        })
        .addCase(getGenerationById.fulfilled, (state, action) => {
            state.generation = action.payload;
        })
        .addCase(getAllPokedexes.fulfilled, (state, action) => {
            state.pokedexes = action.payload;
            state.pokedexesPages = calculatePages(action.payload)
        })
        .addCase(getPokedexById.fulfilled, (state, action) => {
            state.pokedex = action.payload;
        })
        .addCase(getAllVersions.fulfilled, (state, action) => {
            state.versions = action.payload;
            state.versionsPages = calculatePages(action.payload)
        })
        .addCase(getVersionById.fulfilled, (state, action) => {
            state.version = action.payload;
        })
        .addCase(getAllVersionGroups.fulfilled, (state, action) => {
            state.versionGroups = action.payload;
            state.versionGroupsPages = calculatePages(action.payload)
        })
        .addCase(getVersionGroupById.fulfilled, (state, action) => {
            state.versionGroup = action.payload;
        })
        .addMatcher(isRejected(
            getAllGenerations,
            getGenerationById,
            getAllPokedexes,
            getPokedexById,
            getAllVersions,
            getVersionById,
            getAllVersionGroups,
            getVersionGroupById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const gameActions = {
    ...gameSlice.actions,
    getAllGenerations,
    getGenerationById,
    getAllPokedexes,
    getPokedexById,
    getAllVersions,
    getVersionById,
    getAllVersionGroups,
    getVersionGroupById,
};