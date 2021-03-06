import { GarageJsonld } from "./garage-jsonId";

export interface GarageCollection {

    'hydra:member': Array<GarageJsonld>;
    'hydra:totalItems': number;
    'hydra:view': {
        '@id': string;
        '@type': string;
        'hydra:first': string;
        'hydra:last': string;
        'hydra:next'?: string;
        'hydra:previous'?:string;
    };
}