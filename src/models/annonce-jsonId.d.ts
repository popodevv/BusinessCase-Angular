export interface AnnonceJsonld {
    '@context'?: string;
    '@id'?: string;
    '@type'?: string;
    id?: number;
    title: string;
    description: string;
    releaseyear: string;
    km: number;
    price: string;
    brand: string;
    model: string;
    fuel?: string;
    garage :string;
}