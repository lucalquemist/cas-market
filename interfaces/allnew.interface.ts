
//* marca *************************************************************************************************************************************************
export interface Marca2 {
    id: number;
    name: string;
    slug: string;
    category: string;
    etapas: {
        pais: string;
        puntos: number;
        participacion: number;
    }[];
    puntuacion: {
        criterios: {
            [key: string]: {
                puntos: number;
                porcentaje: number;
            }
        },
        sections: {
            [key: string]: {
                puntos: number;
                porcentaje: number;
            }
        },
    },
    variables: {
        variable: string; // pais
        seccion: string; // responsabilidad pais
        criterioNombre: string; // criterios de paises
        valor: any; // participaciones 
        puntos: number; // puntos pais
        fuente: string;
    }[]
}

/*

sectionsA: {
        [key: string]: {
            [key: string]: {
                valor: any,
                score: number,
                fuente: string,
            }
        }
    },

interface Etapa2 {
    pais: string;
    participacion: number;
}

interface Secciones2 {
    responsabilidad_en_el_manejo_de_datos?: Variables2;
    responsabilidad_belica?: Variables2;
    responsabilidad_con_animales?: Variables2;
    responsabilidad_laboral?: Variables2;
}

interface Variables2 {
    [key: string]: {
        valor: any,
        score: number,
        fuente: string,
    }
}*/

//* criterio *************************************************************************************************************************************************
export interface Criterio2 {
    id: number;
    title: string;
    slug: string;
    section: string;
    description: string;
    implicado: string;
    tipo: string;
    ratio: number;
    suscrito: boolean;
    suscripciones: number;
    variables: {
        [key: string]: { // variable
            description: string;
            section: string;
            formula?: string;
            options: {
                [key: string]: { // options
                    score: number;
                    description: string;
                }
            }
        }
    }
}

/*
export interface Variable2 {
    variable: string;
    description: string;
    section: string;
    options: Option2[];
}

export interface Option2 {
    value: any;
    score: number;
    description: string;
}

// esta interface es para las secciones en las que guardamos los criterios
export interface Sections2 {
    responsabilidad_en_el_manejo_de_datos?: Variable2[];
    responsabilidad_belica?: Variable2[];
    responsabilidad_con_animales?: Variable2[];
    responsabilidad_laboral?: Variable2[];
}*/