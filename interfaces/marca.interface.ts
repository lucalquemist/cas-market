/*
export interface Marca {
    id: number;
    name: string;
    responsabilidad_en_el_manejo_de_datos?: any;
    responsabilidad_belica?: any;
    responsabilidad_con_animales?: any;
    responsabilidad_laboral?: any;
}*/

export interface Marca {
    id: number;
    name: string;
    category: string;
    datos: SeedDatos;
}
interface SeedDatos {
    // [key: string]: SeedDato;
    responsabilidad_en_el_manejo_de_datos?: SeedDato;
    responsabilidad_belica?: SeedDato;
    responsabilidad_con_animales?: SeedDato;
    responsabilidad_laboral?: SeedDato;
}
interface SeedDato {
    [key: string]: any;
}