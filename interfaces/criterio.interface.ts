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

export interface Variable {
    variable: string;
    description?: string;
    section?: string;
    options?: Option[];
}

export interface Option {
    value?: any;
    score?: number;
    description?: string;
}

// esta interface es para las secciones en las que guardamos los criterios
export interface Sections {
    responsabilidad_en_el_manejo_de_datos?: Variable[];
    responsabilidad_belica?: Variable[];
    responsabilidad_con_animales?: Variable[];
    responsabilidad_laboral?: Variable[];
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