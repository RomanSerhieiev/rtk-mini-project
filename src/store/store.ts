import { configureStore } from '@reduxjs/toolkit';
import { berrySlice } from './slices/berry.slice';
import { contestSlice } from './slices/contest.slice';
import { encounterSlice } from './slices/encounter.slice';
import { evolutionSlice } from './slices/evolution.slice';
import { gameSlice } from './slices/game.slice';
import { itemSlice } from './slices/item.slice';
import { locationSlice } from './slices/location.slice';
import { machineSlice } from './slices/machine.slice';
import { moveSlice } from './slices/move.slice';
import { pokemonSlice } from './slices/pokemon.slice';
import { utilitySlice } from './slices/utility.slice';
import { themeSlice } from './slices/theme.slice';

export const store = configureStore({
    reducer: {
        berrySlice: berrySlice.reducer,
        contestSlice: contestSlice.reducer,
        encounterSlice: encounterSlice.reducer,
        evolutionSlice: evolutionSlice.reducer,
        gameSlice: gameSlice.reducer,
        itemSlice: itemSlice.reducer,
        locationSlice: locationSlice.reducer,
        machineSlice: machineSlice.reducer,
        moveSlice: moveSlice.reducer,
        pokemonSlice: pokemonSlice.reducer,
        utilitySlice: utilitySlice.reducer,
        themeSlice: themeSlice.reducer,
    }
});