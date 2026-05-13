'use client';

import { Marca2 } from "@/interfaces";
import { useMarcaStore } from "@/store";
import { useState } from "react";

interface Props {
    marca: Marca2;
}

export const MainMarca = ({ marca }: Props) => {

    const marca2 = useMarcaStore(store => store.marcasScore.find(marcax => marcax.id === marca.id)) as Marca2 //* en el store no hay nada si uno entra directamente a la marca

    console.log('marca2 main: ');
    console.log(marca2);

    const [orden, setOrden] = useState(true);
    const [mostrar, setMostrar] = useState(false);

    const variablesConCriterio = marca2.variables.filter(v => v.criterioNombre !== '')

    console.log('variablesConCriterio: ');
    console.log(variablesConCriterio);

    const variablesAgrupadas = Object.groupBy(
        variablesConCriterio,
        (variable) => orden ? variable?.seccion : variable?.criterioNombre
    );

    //const productosAgrupados = Object.groupBy(marca2?.variables, (v) => v?.criterioNombre) // me devuelve un objeto con varios arreglos de objetos variables

    const handleClick = () => {
        setOrden(prev => !prev); // a veces queda al revés
    }

    return (
        <div className="ml-3 ">
            <div className="">
                <p>{marca2.name} - {marca2.category}</p>
                <div className="mt-5 mb-2 max-w-60" onClick={handleClick}>
                    <p className="flex justify-center bg-blue-600 hover:bg-blue-800 text-white py-1 px-2 rounded transition-all cursor-pointer ml-auto">
                        agrupar en {orden ? ' secciones' : ' criterios'}
                    </p>
                </div>
            </div>
            <hr className="mt-3 mb-3" />
            {Object.entries(variablesAgrupadas).map(
                ([ordenador, variables]) => {

                    if (!variables) return null;

                    const puntos = orden
                        ? marca2.puntuacion.sections?.[ordenador]?.puntos
                        : marca2.puntuacion.criterios?.[ordenador]?.puntos;

                    return (
                        <div key={ordenador} className="m-2 mb-2">

                            <h3>
                                {ordenador} ({puntos ?? 0})
                            </h3>

                            {variables.map((value, index) => (
                                <div key={index} className="pl-3">

                                    <div className="flex">
                                        <p>
                                            {value.variable}: {value.valor} ({value.puntos})
                                        </p>

                                        {value.explicacion && (
                                            <button
                                                onClick={() => setMostrar(!mostrar)}
                                                className="ml-2 bg-amber-500 rounded-xs px-1"
                                            >
                                                {mostrar ? 'Ocultar' : 'Mostrar'}
                                            </button>
                                        )}
                                    </div>

                                    {value.explicacion && mostrar && (
                                        <div className="pl-3 ">
                                            <p className="bg-gray-700 rounded-xs px-1">
                                                {` * (${value.explicacion})`}
                                            </p>
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>
                    );
                }
            )}

            <p>Total: {marca2.puntuacion.criterios['total'].puntos}</p>
            <hr className="mt-3 mb-3" />
        </div>
    )
}

/* 'use client';

import { Marca2 } from "@/interfaces";
import { useMarcaStore } from "@/store";
import { useState } from "react";

interface Props {
    marca: Marca2;
}

export const MainMarca = ({ marca }: Props) => {

    const marca2 = useMarcaStore(store => store.marcasScore.find( marcax => marcax.id === marca.id )) as Marca2 //* en el store no hay nada si uno entra directamente a la marca
    
    console.log('marca2 main: ');
    console.log(marca2);

    const [orden, setOrden] = useState(true);
    const [mostrar, setMostrar] = useState(false);

    const variablesConCriterio = marca2.variables.filter(v => v.criterioNombre !== '')

    console.log('variablesConCriterio: ');
    console.log(variablesConCriterio);

    const variablesAgrupadas = Object.groupBy(
        variablesConCriterio,
        (variable) => orden ? variable?.seccion : variable?.criterioNombre
    );
    
    //const productosAgrupados = Object.groupBy(marca2?.variables, (v) => v?.criterioNombre) // me devuelve un objeto con varios arreglos de objetos variables

    const handleClick = () => {
        setOrden(prev => !prev); // a veces queda al revés
    }

    return (
        <div className="ml-3 ">
            <div className="">
                <p>{marca2.name} - {marca2.category}</p>
                <div className="mt-5 mb-2 max-w-60" onClick={handleClick}>
                    <p className="flex justify-center bg-blue-600 hover:bg-blue-800 text-white py-1 px-2 rounded transition-all cursor-pointer ml-auto">
                        agrupar en { orden ? ' secciones' : ' criterios' }
                    </p>
                </div>
            </div>
            <hr className="mt-3 mb-3" />
            {Object.entries(variablesAgrupadas).map(
                ([ordenador, variables]) => {
                    if (!variables) return null;

                    return (
                        <div key={ordenador} className="m-2 mb-2">
                            <h3>{ordenador} {marca2.puntuacion.criterios[ordenador].puntos || marca2.puntuacion.sections[ordenador].puntos}</h3>

                            {Object.entries(variables).map(([key, value]) => (
                                <div key={key} className="pl-3">
                                    
                                    <div className="flex">
                                        <p> {value.variable}: {value.valor} ({value.puntos}) </p>

                                        { value.explicacion && (
                                            <button 
                                                onClick={() => setMostrar(!mostrar)}
                                                className="ml-2 bg-amber-500 rounded-xs px-1"
                                            >
                                                {mostrar ? 'Ocultar' : 'Mostrar'}
                                            </button> 
                                        ) }
                                    </div>
                                    
                                    { value.explicacion && mostrar && (
                                        <div className="pl-3 ">
                                            <p className="bg-gray-700 rounded-xs px-1"> {` * (${value.explicacion})`} </p>
                                        </div>
                                    )}
                                
                                </div>
                            ))}
                        </div>
                    );
                }
            )}
            
            <p>Total: {marca2.puntuacion.criterios['total'].puntos}</p>
            <hr className="mt-3 mb-3" />
        </div>
    )
} */

/*
* implementar la linea punteada hasta completar el ancho del renglón
*
* orden: nota ascendiente, nota descendiente, alfabetico ascendente y alfabetico descendente
* agrupado: por criterio, por seccion, sin agrupar
* 
* agregar sección de enlaces a las fuentes
* 
* aplicar un sistema de color a los estilos de las notas
* agregar imagenes
* 
* podria ser una i despues de la nota para desplegar el detalle de la variable 
* la marca debe tener un subtotal de cada area
*
* que pasa en los casos en que hay mas de una fuente¿ 
*/

/**
return (
        <div className="ml-3">
            <p>{marca2.name} - {marca2.category}</p>
            <hr className="mt-3 mb-3" />
            {Object.entries(marca2.sections).map(
                ([section, variables]: [string, Variables | undefined]) => {
                    if (!variables) return null;

                    return (
                        <div key={section}>
                            <h3>{section}</h3>

                            {Object.entries(variables).map(([key, value]) => (
                                <p key={key} className="pl-3">
                                    {key}: {value.valor} ({value.score})
                                </p>
                            ))}
                        </div>
                    );
                }
            )}
            <p>Total: {marca2.score['total']}</p>
            <hr className="mt-3 mb-3" />
        </div>
    )
 */

/*
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
        <div className="ml-3">
            <p>{marca2.name} - {marca2.category}</p>
            <hr className="mt-3 mb-3" />
            {Object.entries(marca2.sections).map(
                ([section, variables]: [string, Variables | undefined]) => {
                    if (!variables) return null;

                    return (
                        <div key={section}>
                            <h3>{section}</h3>

                            {Object.entries(variables).map(([key, value]) => (
                                <p key={key} className="pl-3">
                                    {key}: {value.valor} ({value.score})
                                </p>
                            ))}
                        </div>
                    );
                }
            )}
            <p>Total: {marca2.score['total']}</p>
            <hr className="mt-3 mb-3" />
        </div>
    )
}
*/