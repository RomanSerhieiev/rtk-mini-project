import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { Item } from '../../models/item/Item.model';
import { ItemAttribute } from '../../models/item/ItemAttribute.model';
import { ItemCategory } from '../../models/item/ItemCategory.model';
import { ItemFlingEffect } from '../../models/item/ItemFlingEffect.model';
import { ItemPocket } from '../../models/item/ItemPocket.model';
import { itemService } from '../../services/item.service';
import { calculatePages } from '../../utils/calculatePages';

interface ItemSlice {
    items: NamedAPIResourceList | null,
    itemsPages: number,
    item: Item | null,
    attributes: NamedAPIResourceList | null,
    attributesPages: number,
    attribute: ItemAttribute | null,
    categories: NamedAPIResourceList | null,
    categoriesPages: number,
    category: ItemCategory | null,
    flingEffects: NamedAPIResourceList | null,
    flingEffectsPages: number,
    flingEffect: ItemFlingEffect | null,
    pockets: NamedAPIResourceList | null,
    pocketsPages: number,
    pocket: ItemPocket | null,
    error: string | null,
}

const initialState: ItemSlice = {
    items: null,
    itemsPages: 1,
    item: null,
    attributes: null,
    attributesPages: 1,
    attribute: null,
    categories: null,
    categoriesPages: 1,
    category: null,
    flingEffects: null,
    flingEffectsPages: 1,
    flingEffect: null,
    pockets: null,
    pocketsPages: 1,
    pocket: null,
    error: null,
};

const getAll = createAsyncThunk(
    'itemSlice/getAll',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getAll(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'itemSlice/getById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllAttributes = createAsyncThunk(
    'itemSlice/getAllAttributes',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getAllAttributes(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAttributeById = createAsyncThunk(
    'itemSlice/getAttributeById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getAttributeById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllCategories = createAsyncThunk(
    'itemSlice/getAllCategories',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getAllCategories(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getCategoryById = createAsyncThunk(
    'itemSlice/getCategoryById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getCategoryById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllFlingEffects = createAsyncThunk(
    'itemSlice/getAllFlingEffects',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getAllFlingEffects(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getFlingEffectById = createAsyncThunk(
    'itemSlice/getFlingEffectById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getFlingEffectById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllPockets = createAsyncThunk(
    'itemSlice/getAllPockets',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getAllPockets(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getPocketById = createAsyncThunk(
    'itemSlice/getPocketById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await itemService.getPocketById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const itemSlice = createSlice({
    name: 'itemSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.items = action.payload;
            state.itemsPages = calculatePages(action.payload)
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.item = action.payload;
        })
        .addCase(getAllAttributes.fulfilled, (state, action) => {
            state.attributes = action.payload;
            state.attributesPages = calculatePages(action.payload)
        })
        .addCase(getAttributeById.fulfilled, (state, action) => {
            state.attribute = action.payload;
        })
        .addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.categoriesPages = calculatePages(action.payload)
        })
        .addCase(getCategoryById.fulfilled, (state, action) => {
            state.category = action.payload;
        })
        .addCase(getAllFlingEffects.fulfilled, (state, action) => {
            state.flingEffects = action.payload;
            state.flingEffectsPages = calculatePages(action.payload)
        })
        .addCase(getFlingEffectById.fulfilled, (state, action) => {
            state.flingEffect = action.payload;
        })
        .addCase(getAllPockets.fulfilled, (state, action) => {
            state.pockets = action.payload;
            state.pocketsPages = calculatePages(action.payload)
        })
        .addCase(getPocketById.fulfilled, (state, action) => {
            state.pocket = action.payload;
        })
        .addMatcher(isRejected(
            getAll,
            getById,
            getAllAttributes,
            getAttributeById,
            getAllCategories,
            getCategoryById,
            getAllFlingEffects,
            getFlingEffectById,
            getAllPockets,
            getPocketById
        ), (state, action) => {
            state.error = action.payload as string;
        })
});

export const itemActions = {
    ...itemSlice.actions,
    getAll,
    getById,
    getAllAttributes,
    getAttributeById,
    getAllCategories,
    getCategoryById,
    getAllFlingEffects,
    getFlingEffectById,
    getAllPockets,
    getPocketById,
};