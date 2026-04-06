'use client';

import { initialData } from "@/seed/seed";
import { MarcaGrid } from "@/components";
import { useCriteriosStore, useMarcaStore } from "@/store";
import {
    Criterio, Sections, Variable, Option,
    Marcas, Marca, Secciones, Variables
} from '@/interfaces';
import { useEffect } from "react";

type SectionsMap = {
    [section: string]: {
        [variable: string]: {
            [value: string]: number;
        };
    };
};

export default function MarcasPage() {

    const marcas: Marca[] = initialData.marcas;

    const favorites = useCriteriosStore(state => state.favorites);
    const updateMarcasScore = useMarcaStore(state => state.updateMarcasScore)
    //
    function buildSectionsMapFromCriterios(
        criterios: Criterio[]
    ): SectionsMap {
        const map: SectionsMap = {};

        for (const criterio of criterios) {
            const section = criterio.section;

            if (!!section) {

                if (!map[section]) {
                    map[section] = {};
                }

                for (const variableObj of criterio.variables) {
                    const variableName = variableObj.variable;

                    if (!map[section][variableName]) {
                        map[section][variableName] = {};
                    }

                    if (!variableObj.options) continue;

                    for (const option of variableObj.options) {
                        if (option.value !== undefined && option.score !== undefined) {
                            map[section][variableName][option.value] = option.score;
                        }
                    }
                }

            }
        }
        return map;
    }

    const sectionsMap = buildSectionsMapFromCriterios(Object.values(favorites));
    console.log('sectionsMap resumido: ');
    console.log(sectionsMap);

    function calcularResultadosOptimizado(
        marcas: Marca[],
        sectionsMap: SectionsMap
    ): Marcas {
        const result: Record<number, any> = {};

        for (const marca of marcas) {

            let scoreTotalMarca = 0;

            const marcaResult: Marca = { // habria que transformar esto en el objeto de marca y completarlo, despues hay que buscar una forma de copiarlo mas sencilla
                id: marca.id,
                name: marca.name,
                slug: marca.slug,
                category: marca.category,
                score: {
                    total: 0
                },
                sections: {} as Record<string, number>
            };

            for (const sectionKey in marca.sections) { // marca.sections son las Secciones, sectionKey es cada seccion
                //const datosSeccion = marca.datos[sectionKey];
                const key = sectionKey as keyof Secciones; // acá se aclara
                const datosSeccion = marca.sections[key]; // datosSeccion es el conjunto de variables de la seccion de la marca


                const sectionMap = sectionsMap[sectionKey]; // sectionMap es el objeto con las variables de la categoria "sectionKey"

                if (!datosSeccion || !sectionMap) continue; // hay variables en la marca  y hay variables en criterio

                let suma = 0;

                for (const variableKey in datosSeccion) { // variableKey es cada variable dentro de la seccion de la marca
                    const valorSeleccionado = datosSeccion[variableKey].valor; // valor seleccionado era lo que hay dentro de cada 

                    const score = sectionMap?.[variableKey]?.[valorSeleccionado];
                    
                    if (marca.sections[key]) {
                        marca.sections[key][variableKey].score = score; // asignamos el score en la variable
                    }
                    datosSeccion[variableKey].score = score;

                    if (score !== undefined) {
                        suma += score;
                        scoreTotalMarca += score;
                    }
                }
                // asignamos la variable con su opcion seleccionada y score a la seccion resultado, está fuera del if porque la agregamos de todos modos
                marcaResult.sections[key] = marca.sections[key]

                // marcaResult.sections[sectionKey] = suma; // esto va tambien en el score, y las sections¿
                marcaResult.score[sectionKey] = suma;
            }
            // acá terminé de recorrer la marca, le asigno el total
            marcaResult.score['total'] = scoreTotalMarca;
            result[marca.id] = marcaResult;
        }

        return result;
    }

    const marcasResultados = calcularResultadosOptimizado(marcas, sectionsMap);

    console.log('resultado marcas: ');
    console.log(marcasResultados);
    
    useEffect(() => { // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
        updateMarcasScore(marcasResultados);
    }, []);

    return (
        <MarcaGrid
            marcasResultados={marcasResultados}
        />
    )
}

/**
 * tareas
   las marcas deben ordenarse según la nota obtenida
   aplicar un sistema de color a los estilos de las notas
   agregar imagenes
   ver otros criterios interesantes como las promesas de la empresa, las condiciones del país, etc.
   ajustar estilo de textos para que no se oculten en pantallas pequeñas
 */


