import { UserJsonld } from "./user-jsonId";


export interface UserCollection {
    'hydra:member': Array<UserJsonld>;
    'hydra:totalItem' : number;
    'hydra:view': {
        '@id':string;
        '@type': string;
        'hydra:first': string;
        'hydra:last': string;
        'hydra:next'?: string;
        'hydra:previous'?:string;
    };
}