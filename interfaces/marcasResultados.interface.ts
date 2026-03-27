

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
    // [key: string]: SeedDato;
    responsabilidad_en_el_manejo_de_datos?: number;
    responsabilidad_belica?: number;
    responsabilidad_con_animales?: number;
    responsabilidad_laboral?: number;
}

// esta es la interface de los resultados de una sola marca
export interface MarcaResultados {
    id: number;
    name: string;
    totalScore: number;
    sections: SeedDatos;
}