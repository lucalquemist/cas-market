'use client';

// import { Marca } from "@/interfaces";

import { useMarcaStore } from "@/store";

export interface Marca {
    id: number;
    name: string;
    slug: string;
    category: string;
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
}

export interface Variables {
    [key: string]: {
        valor: any,
        score: number,
    }
}

interface Props {
    marca: Marca;
    // className?: string;
}



export const MainMarca = ({ marca }: Props) => {

    console.log('marca: ');
    console.log(marca);

    // tengo que traer la marca del store, primero debo almacenarla ahí 
    const marca2 = useMarcaStore(store => store.marcasScore[marca.id]) // necesito buscarla por su id

    return (
        <div>
            <p>{marca2.name}</p>
            <hr className="mt-3 mb-3" />
            <p>Categoria: {marca2.category}</p>
            <hr className="mt-3 mb-3" />
            {Object.entries(marca2.sections).map(
                ([section, variables]: [string, Variables | undefined]) => {
                    if (!variables) return null;

                    return (
                        <div key={section}>
                            <h3>{section}</h3>

                            {Object.entries(variables).map(([key, value]) => (
                                <p key={key}>
                                    {key}: {value.valor} ({value.score})
                                </p>
                            ))}
                        </div>
                    );
                }
            )}
            <hr className="mt-3 mb-3" />
        </div>
    )
}
