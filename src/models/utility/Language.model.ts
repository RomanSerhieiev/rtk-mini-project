import { Name } from '../common/Name.model';

export interface Language {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    official: boolean; //Whether or not the games are published in this language.
    iso639: string; //The two-letter code of the country where this language is spoken. Note that it is not unique.
    iso3166: string; //The two-letter code of the language. Note that it is not unique.
    names: Name[]; //The name of this resource listed in different languages.
}