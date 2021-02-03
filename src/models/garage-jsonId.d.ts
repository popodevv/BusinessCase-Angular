export interface GarageJsonld {
    '@context': string;
    '@id': string;
    '@type': string;
    id: number;
    namestreet?: string;
    streetcomplement?: string;
    postalcode?: string;
    city?: string;
    owner: string;
}