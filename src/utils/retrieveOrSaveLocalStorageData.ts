import { EKey } from '../enums/keys.enum';
import { retrieveLocalStorageData } from './retrieveLocalStorageData';
import { saveLocalStorageData } from './saveLocalStorageData';

export const retrieveOrSaveLocalStorageData = <T>(key: EKey, defaultValue: T): T => {
    if (retrieveLocalStorageData<T>(key)) {
        return retrieveLocalStorageData<T>(key);
    } else {
        saveLocalStorageData(key, defaultValue);
        return retrieveLocalStorageData<T>(key);
    }
};