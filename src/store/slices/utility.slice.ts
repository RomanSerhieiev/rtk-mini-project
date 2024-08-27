import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { Language } from '../../models/utility/Language.model';
import { utilityService } from '../../services/utility.service';
import { calculatePages } from '../../utils/calculatePages';

interface UtilitySlice {
    languages: NamedAPIResourceList | null,
    languagesPages: number,
    language: Language | null,
    error: string | null,
}

const initialState: UtilitySlice = {
    languages: null,
    languagesPages: 1,
    language: null,
    error: null,
};

const getAllLanguages = createAsyncThunk(
    'utilitySlice/getAllLanguages',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await utilityService.getAllLanguages(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getLanguageById = createAsyncThunk(
    'utilitySlice/getLanguageById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await utilityService.getLanguageById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const utilitySlice = createSlice({
    name: 'utilitySlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllLanguages.fulfilled, (state, action) => {
            state.languages = action.payload;
            state.languagesPages = calculatePages(action.payload)
        })
        .addCase(getLanguageById.fulfilled, (state, action) => {
            state.language = action.payload;
        })
        .addMatcher(isRejected(
            getAllLanguages,
            getLanguageById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const utilityActions = {
    ...utilitySlice.actions,
    getAllLanguages,
    getLanguageById,
};