import { createSlice } from '@reduxjs/toolkit';
import { retrieveOrSaveLocalStorageData } from '../../utils/retrieveOrSaveLocalStorageData';
import { EKey } from '../../enums/keys.enum';
import { saveLocalStorageData } from '../../utils/saveLocalStorageData';

interface ThemeSlice {
    blue: boolean,
}

const initialState: ThemeSlice = {
    blue: retrieveOrSaveLocalStorageData<boolean>(EKey.blue, false),
};

export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.blue = !state.blue
            saveLocalStorageData(EKey.blue, state.blue)
        }
    },
});

export const themeActions = {
    ...themeSlice.actions,
};