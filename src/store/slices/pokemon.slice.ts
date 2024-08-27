import { createAsyncThunk, createSlice, isRejected, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NamedAPIResourceList } from '../../models/pagination/NamedAPIResourceList.model';
import { Pokemon } from '../../models/pokemon/Pokemon.model';
import { Ability } from '../../models/pokemon/Ability.model';
import { APIResourceList } from '../../models/pagination/APIResourceList.model';
import { Characteristic } from '../../models/pokemon/Characteristic.model';
import { EggGroup } from '../../models/pokemon/EggGroup.model';
import { Gender } from '../../models/pokemon/Gender.model';
import { GrowthRate } from '../../models/pokemon/GrowthRate.model';
import { Nature } from '../../models/pokemon/Nature.model';
import { PokeathlonStat } from '../../models/pokemon/PokeathlonStat.model';
import { PokemonColor } from '../../models/pokemon/PokemonColor.model';
import { PokemonForm } from '../../models/pokemon/PokemonForm.model';
import { PokemonHabitat } from '../../models/pokemon/PokemonHabitat.model';
import { PokemonShape } from '../../models/pokemon/PokemonShape.model';
import { PokemonSpecies } from '../../models/pokemon/PokemonSpecies.model';
import { Stat } from '../../models/pokemon/Stat.model';
import { Type } from '../../models/pokemon/Type.model';
import { FavoritePokemon } from '../../models/pokemon/FavoritePokemon.model';
import { pokemonService } from '../../services/pokemon.service';
import { calculatePages } from '../../utils/calculatePages';
import { retrieveOrSaveLocalStorageData } from '../../utils/retrieveOrSaveLocalStorageData';
import { EKey } from '../../enums/keys.enum';
import { saveLocalStorageData } from '../../utils/saveLocalStorageData';
import { redirect } from 'react-router-dom';
import { NamedAPIResource } from '../../models/common/NamedAPIResource.model';

interface PokemonSlice {
    pokemonsByType: NamedAPIResource[] | null,
    pokemonsByTypePages: number,
    pokemons: NamedAPIResourceList | null,
    pokemonsPages: number,
    favoritePokemons: FavoritePokemon[],
    favoritePokemonsPages: number,
    pokemon: Pokemon | null,
    abilities: NamedAPIResourceList | null,
    abilitiesPages: number,
    ability: Ability | null,
    characteristics: APIResourceList | null,
    characteristicsPages: number,
    characteristic: Characteristic | null,
    eggGroups: NamedAPIResourceList | null,
    eggGroupsPages: number,
    eggGroup: EggGroup | null,
    genders: NamedAPIResourceList | null,
    gendersPages: number,
    gender: Gender | null,
    growthRates: NamedAPIResourceList | null,
    growthRatesPages: number,
    growthRate: GrowthRate | null,
    natures: NamedAPIResourceList | null,
    naturesPages: number,
    nature: Nature | null,
    pokeathlonStats: NamedAPIResourceList | null,
    pokeathlonStatsPages: number,
    pokeathlonStat: PokeathlonStat | null,
    encounters: NamedAPIResourceList | null,
    encountersPages: number,
    colors: NamedAPIResourceList | null,
    colorsPages: number,
    color: PokemonColor | null,
    forms: NamedAPIResourceList | null,
    formsPages: number,
    form: PokemonForm | null,
    habitats: NamedAPIResourceList | null,
    habitatsPages: number,
    habitat: PokemonHabitat | null,
    shapes: NamedAPIResourceList | null,
    shapesPages: number,
    shape: PokemonShape | null,
    species: NamedAPIResourceList | null,
    speciesPages: number,
    specie: PokemonSpecies | null,
    stats: NamedAPIResourceList | null,
    statsPages: number,
    stat: Stat | null,
    types: NamedAPIResourceList | null,
    typesPages: number,
    type: Type | null,
    error: string | null,
}

const initialState: PokemonSlice = {
    pokemonsByType: [],
    pokemonsByTypePages: 1,
    pokemons: null,
    pokemonsPages: 1,
    favoritePokemons: retrieveOrSaveLocalStorageData<FavoritePokemon[]>(EKey.favorites, []),
    favoritePokemonsPages: 1,
    pokemon: null,
    abilities: null,
    abilitiesPages: 1,
    ability: null,
    characteristics: null,
    characteristicsPages: 1,
    characteristic: null,
    eggGroups: null,
    eggGroupsPages: 1,
    eggGroup: null,
    genders: null,
    gendersPages: 1,
    gender: null,
    growthRates: null,
    growthRatesPages: 1,
    growthRate: null,
    natures: null,
    naturesPages: 1,
    nature: null,
    pokeathlonStats: null,
    pokeathlonStatsPages: 1,
    pokeathlonStat: null,
    encounters: null,
    encountersPages: 1,
    colors: null,
    colorsPages: 1,
    color: null,
    forms: null,
    formsPages: 1,
    form: null,
    habitats: null,
    habitatsPages: 1,
    habitat: null,
    shapes: null,
    shapesPages: 1,
    shape: null,
    species: null,
    speciesPages: 1,
    specie: null,
    stats: null,
    statsPages: 1,
    stat: null,
    types: null,
    typesPages: 1,
    type: null,
    error: null,
};

const getAll = createAsyncThunk(
    'pokemonSlice/getAll',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAll(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'pokemonSlice/getById',
    async (id: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllAbilities = createAsyncThunk(
    'pokemonSlice/getAllAbilities',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllAbilities(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAbilityById = createAsyncThunk(
    'pokemonSlice/getAbilityById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAbilityById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllCharacteristics = createAsyncThunk(
    'pokemonSlice/getAllCharacteristics',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllCharacteristics(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getCharacteristicById = createAsyncThunk(
    'pokemonSlice/getCharacteristicById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getCharacteristicById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllEggGroups = createAsyncThunk(
    'pokemonSlice/getAllEggGroups',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllEggGroups(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getEggGroupById = createAsyncThunk(
    'pokemonSlice/getEggGroupById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getEggGroupById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllGenders = createAsyncThunk(
    'pokemonSlice/getAllGenders',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllGenders(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getGenderById = createAsyncThunk(
    'pokemonSlice/getGenderById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getGenderById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllGrowthRates = createAsyncThunk(
    'pokemonSlice/getAllGrowthRates',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllGrowthRates(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getGrowthRateById = createAsyncThunk(
    'pokemonSlice/getGrowthRateById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getGrowthRateById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllNatures = createAsyncThunk(
    'pokemonSlice/getAllNatures',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllNatures(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getNatureById = createAsyncThunk(
    'pokemonSlice/getNatureById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getNatureById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllPokeathlonStats = createAsyncThunk(
    'pokemonSlice/getAllPokeathlonStats',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllPokeathlonStats(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getPokeathlonStatById = createAsyncThunk(
    'pokemonSlice/getPokeathlonStatById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getPokeathlonStatById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllEncountersById = createAsyncThunk(
    'pokemonSlice/getAllEncountersById',
    async (_: { id: number, offset: number }, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllEncountersById(_.id, _.offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllColors = createAsyncThunk(
    'pokemonSlice/getAllColors',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllColors(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getColorById = createAsyncThunk(
    'pokemonSlice/getColorById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getColorById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllForms = createAsyncThunk(
    'pokemonSlice/getAllForms',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllForms(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getFormById = createAsyncThunk(
    'pokemonSlice/getFormById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getFormById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllHabitats = createAsyncThunk(
    'pokemonSlice/getAllHabitats',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllHabitats(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getHabitatById = createAsyncThunk(
    'pokemonSlice/getHabitatById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getHabitatById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllShapes = createAsyncThunk(
    'pokemonSlice/getAllShapes',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllShapes(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getShapeById = createAsyncThunk(
    'pokemonSlice/getShapeById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getShapeById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllSpecies = createAsyncThunk(
    'pokemonSlice/getAllSpecies',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllSpecies(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getSpecieById = createAsyncThunk(
    'pokemonSlice/getSpecieById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getSpecieById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllStats = createAsyncThunk(
    'pokemonSlice/getAllStats',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllStats(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getStatById = createAsyncThunk(
    'pokemonSlice/getStatById',
    async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getStatById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getAllTypes = createAsyncThunk(
    'pokemonSlice/getAllTypes',
    async (offset: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getAllTypes(offset));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getTypeById = createAsyncThunk(
    'pokemonSlice/getTypeById',
    async (id: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await pokemonService.getTypeById(id));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ id: number, name: string, img: string }>) => {
            const exists = state.favoritePokemons.some(pokemon => pokemon.id === action.payload.id);
            if (!exists) {
                state.favoritePokemons.push(action.payload);
                state.favoritePokemonsPages = state.favoritePokemons.length > 0
                    ? state.favoritePokemons.length % 20 === 0
                        ? state.favoritePokemons.length / 20
                        : Math.floor(state.favoritePokemons.length / 20) + 1
                    : 1;
                saveLocalStorageData(EKey.favorites, state.favoritePokemons);
            }
        },
        remove: (state, action: PayloadAction<{ id: number }>) => {
            state.favoritePokemons = state.favoritePokemons.filter(pokemon => pokemon.id !== action.payload.id);
            state.favoritePokemonsPages = state.favoritePokemons.length > 0
                ? state.favoritePokemons.length % 20 === 0
                    ? state.favoritePokemons.length / 20
                    : Math.floor(state.favoritePokemons.length / 20) + 1
                : 1;
            saveLocalStorageData(EKey.favorites, state.favoritePokemons);
        },
        pokemons: (state, action: PayloadAction<NamedAPIResource[] | null>) => {
            state.pokemonsByType = action.payload
            state.pokemonsByTypePages = state.pokemonsByType
                ? state.pokemonsByType.length % 20 === 0
                    ? state.pokemonsByType.length / 20
                    : Math.floor(state.pokemonsByType.length / 20) + 1
                : 1;
        },
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.pokemons = action.payload;
            state.pokemonsPages = calculatePages(action.payload);
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.pokemon = action.payload;
        })
        .addCase(getById.rejected, (state, action) => {
            state.pokemon = null;
        })
        .addCase(getAllAbilities.fulfilled, (state, action) => {
            state.abilities = action.payload;
            state.abilitiesPages = calculatePages(action.payload);
        })
        .addCase(getAbilityById.fulfilled, (state, action) => {
            state.ability = action.payload;
        })
        .addCase(getAllCharacteristics.fulfilled, (state, action) => {
            state.characteristics = action.payload;
            state.characteristicsPages = calculatePages(action.payload);
        })
        .addCase(getCharacteristicById.fulfilled, (state, action) => {
            state.characteristic = action.payload;
        })
        .addCase(getAllEggGroups.fulfilled, (state, action) => {
            state.eggGroups = action.payload;
            state.eggGroupsPages = calculatePages(action.payload);
        })
        .addCase(getEggGroupById.fulfilled, (state, action) => {
            state.eggGroup = action.payload;
        })
        .addCase(getAllGenders.fulfilled, (state, action) => {
            state.genders = action.payload;
            state.gendersPages = calculatePages(action.payload);
        })
        .addCase(getGenderById.fulfilled, (state, action) => {
            state.gender = action.payload;
        })
        .addCase(getAllGrowthRates.fulfilled, (state, action) => {
            state.growthRates = action.payload;
            state.growthRatesPages = calculatePages(action.payload);
        })
        .addCase(getGrowthRateById.fulfilled, (state, action) => {
            state.growthRate = action.payload;
        })
        .addCase(getAllNatures.fulfilled, (state, action) => {
            state.natures = action.payload;
            state.naturesPages = calculatePages(action.payload);
        })
        .addCase(getNatureById.fulfilled, (state, action) => {
            state.nature = action.payload;
        })
        .addCase(getAllPokeathlonStats.fulfilled, (state, action) => {
            state.pokeathlonStats = action.payload;
            state.pokeathlonStatsPages = calculatePages(action.payload);
        })
        .addCase(getPokeathlonStatById.fulfilled, (state, action) => {
            state.pokeathlonStat = action.payload;
        })
        .addCase(getAllEncountersById.fulfilled, (state, action) => {
            state.encounters = action.payload;
            state.encountersPages = calculatePages(action.payload);
        })
        .addCase(getAllColors.fulfilled, (state, action) => {
            state.colors = action.payload;
            state.colorsPages = calculatePages(action.payload);
        })
        .addCase(getColorById.fulfilled, (state, action) => {
            state.color = action.payload;
        })
        .addCase(getAllForms.fulfilled, (state, action) => {
            state.forms = action.payload;
            state.formsPages = calculatePages(action.payload);
        })
        .addCase(getFormById.fulfilled, (state, action) => {
            state.form = action.payload;
        })
        .addCase(getAllHabitats.fulfilled, (state, action) => {
            state.habitats = action.payload;
            state.habitatsPages = calculatePages(action.payload);
        })
        .addCase(getHabitatById.fulfilled, (state, action) => {
            state.habitat = action.payload;
        })
        .addCase(getAllShapes.fulfilled, (state, action) => {
            state.shapes = action.payload;
            state.shapesPages = calculatePages(action.payload);
        })
        .addCase(getShapeById.fulfilled, (state, action) => {
            state.shape = action.payload;
        })
        .addCase(getAllSpecies.fulfilled, (state, action) => {
            state.species = action.payload;
            state.speciesPages = calculatePages(action.payload);
        })
        .addCase(getSpecieById.fulfilled, (state, action) => {
            state.specie = action.payload;
        })
        .addCase(getAllStats.fulfilled, (state, action) => {
            state.stats = action.payload;
            state.statsPages = calculatePages(action.payload);
        })
        .addCase(getStatById.fulfilled, (state, action) => {
            state.stat = action.payload;
        })
        .addCase(getAllTypes.fulfilled, (state, action) => {
            state.types = action.payload;
            state.typesPages = calculatePages(action.payload);
        })
        .addCase(getTypeById.fulfilled, (state, action) => {
            state.type = action.payload;
        })
        .addMatcher(isRejected(
            getAll,
            getById,
            getAllAbilities,
            getAbilityById,
            getAllCharacteristics,
            getCharacteristicById,
            getAllEggGroups,
            getEggGroupById,
            getAllGenders,
            getGenderById,
            getAllGrowthRates,
            getGrowthRateById,
            getAllNatures,
            getNatureById,
            getAllPokeathlonStats,
            getPokeathlonStatById,
            getAllEncountersById,
            getAllColors,
            getColorById,
            getAllForms,
            getFormById,
            getAllHabitats,
            getHabitatById,
            getAllShapes,
            getShapeById,
            getAllSpecies,
            getSpecieById,
            getAllStats,
            getStatById,
            getAllTypes,
            getTypeById,
        ), (state, action) => {
            state.error = action.payload as string;
            redirect('/form')
        })
});

export const pokemonActions = {
    ...pokemonSlice.actions,
    getAll,
    getById,
    getAllAbilities,
    getAbilityById,
    getAllCharacteristics,
    getCharacteristicById,
    getAllEggGroups,
    getEggGroupById,
    getAllGenders,
    getGenderById,
    getAllGrowthRates,
    getGrowthRateById,
    getAllNatures,
    getNatureById,
    getAllPokeathlonStats,
    getPokeathlonStatById,
    getAllEncountersById,
    getAllColors,
    getColorById,
    getAllForms,
    getFormById,
    getAllHabitats,
    getHabitatById,
    getAllShapes,
    getShapeById,
    getAllSpecies,
    getSpecieById,
    getAllStats,
    getStatById,
    getAllTypes,
    getTypeById,
};