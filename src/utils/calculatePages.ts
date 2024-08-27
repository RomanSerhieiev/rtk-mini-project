import { NamedAPIResourceList } from '../models/pagination/NamedAPIResourceList.model';
import { APIResourceList } from '../models/pagination/APIResourceList.model';

export const calculatePages = (res: NamedAPIResourceList | APIResourceList) => {
    return res.count % 20 === 0
        ? res.count / 20
        : Math.floor(res.count / 20) + 1;
};