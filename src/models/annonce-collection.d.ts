import { AnnonceJsonld } from "./annonce-jsonId";

export interface AnnonceCollection {

    'hydra:member': Array<AnnonceJsonld>;
    'hydra:totalItem' : number;
    'hydra:view': {
        '@id':string;
        '@type': string;
        'hydra:first': string;
        'hydra:last': string;
        'hydra:next': string;
        'hydra:previous'?:string;
    }

}