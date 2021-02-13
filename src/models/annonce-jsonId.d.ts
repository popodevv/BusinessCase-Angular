export interface AnnonceJsonld {
    '@context'?: string;
    '@id'?: string;
    '@type'?: string;
    id?: string;
    title: string;
    description: string;
    releaseyear: string;
    km: string;
    price: string;
    brand: string;
    model: string;
    fuel?: string;
    garage :string;
}