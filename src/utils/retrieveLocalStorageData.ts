import { EKey } from '../enums/keys.enum';

export const retrieveLocalStorageData = <T>(key: EKey) => {
    const dataJSON = localStorage.getItem(key) || '';

    if (!dataJSON) {
        return null as T;
    }

    const data = JSON.parse(dataJSON);

    return data as T;
};