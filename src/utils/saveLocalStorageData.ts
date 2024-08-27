import { EKey } from '../enums/keys.enum';

export const saveLocalStorageData = <T>(key: EKey, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
};