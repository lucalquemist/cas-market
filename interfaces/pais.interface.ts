

export interface Pais {
    nombre: string;
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
        variable: string;
        seccion: string;
        criterioNombre: string;
        valor: any;
        puntos: number;
        fuente: string;
    }[];
}


/*
export interface Pais {
    nombre: string;
    score: {
        [key: string]: number;
    },
    sections: Secciones2
}
export interface Secciones2 {
    economia?: Variables2,
    justicia?: Variables2,
}

export interface Variables2 {
    [key: string]: {
        valor: any,
        score: number,
        fuente: string,
    }
}
*/
/*
export interface Pais {
    nombre: string;
    score: {
        [key: string]: number;
    },
    sections: {
        [key: string]: {
            [key: string]: {
                valor: any,
                score: number,
                fuente: string,
            }
        }
    }
}*/
/*
export interface Variables {
    [key: string]: {
        valor: any,
        score: number,
        fuente: string,
    }
}*/
