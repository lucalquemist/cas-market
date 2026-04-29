export interface Marcas {
    [id: number]: Marca;
}

export interface Marca { 
    id: number;
    name: string;
    slug: string;
    category: string;
    etapas: SeedEtapa[];
    score: {
        [key: string]: number;
    },
    sections: Secciones;
}

export interface Secciones {
    responsabilidad_en_el_manejo_de_datos?: Variables,
    responsabilidad_belica?: Variables,
    responsabilidad_con_animales?: Variables,
    responsabilidad_laboral?: Variables,
    responsabilidad_pais?: Variables;
}

export interface Variables {
    [key: string]: {
        valor: any,
        score: number,
    }
}
export interface SeedEtapa {
    pais: string;
    participacion: number;
}

//export interface Dato {
    //[key: string]: any;
//}


/*
export interface MarcasResultados {
    [id: number]: {
        id: number;
        name: string;
        category: string;
        totalScore: number;
        sections: SeedDatos;
    }
}

interface SeedDatos {
    responsabilidad_en_el_manejo_de_datos?: number;
    responsabilidad_belica?: number;
    responsabilidad_con_animales?: number;
    responsabilidad_laboral?: number;
}

esta es la interface de los resultados de una sola marca
export interface MarcaResultados {
    id: number;
    name: string;
    totalScore: number;
    sections: SeedDatos;
}
 */