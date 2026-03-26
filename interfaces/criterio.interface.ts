// import type { SeedInformation } from "./information.interface";

export interface Criterio {
    id: number;
    title: string;
    slug?: string;
    section?: string;
    description?: string;
    suscrito?: boolean;
    suscripciones?: number;
    variables: Variable[];
}

interface Variable {
    variable: string;
    description: string;
    options: Option[];
}

interface Option {
    value: any;
    score: number;
    description: string;
}

/*export interface Criterio {
    // id
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Type;
    gender: Category;
}*/

//export type Category = 'men'|'women'|'kid'|'unisex';
//export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
//export type Type = 'shirts'|'pants'|'hoodies'|'hats';