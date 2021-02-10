export interface GarageJsonld {
    '@context': string;
    '@id': string;
    '@type': string;
    id: number;
    name: string;
    street: string;
    streetcomplement?: string;
    postalcode?: string;
    city?: string;
    owner: string;
}