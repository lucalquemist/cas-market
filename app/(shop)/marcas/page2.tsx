/**
'use client';


import { initialData } from "@/seed/seed";
import { MarcaGrid } from "@/components";
import { useCriteriosStore } from "@/store";
import { Criterio, Marca, MarcasResultados } from '@/interfaces';

type SectionsMap = {
    [section: string]: {
        [variable: string]: {
            [value: string]: number;
        };
    };
};

interface Sections {
    responsabilidad_en_el_manejo_de_datos?: SeedVariable[];
    responsabilidad_belica?: SeedVariable[];
    responsabilidad_con_animales?: SeedVariable[];
    responsabilidad_laboral?: SeedVariable[];
}
interface SeedVariable {
    variable: string;
    description?: string;
    section?: string;
    options?: SeedOption[];
}

interface SeedOption {
    value?: any;
    score?: number;
    description?: string;
}

// para evitar error de variables
interface SeedDato {
    [key: string]: SeedVar[];
}
interface SeedVar {
    [key: string]: any;
}

//
type ResultadoMarca = {
  name: string;
  sections: Record<string, number>;
};

// pego seeddatos desde la interface archivo
interface SeedDatos {
    // [key: string]: SeedDato;
    responsabilidad_en_el_manejo_de_datos?: SeedDato;
    responsabilidad_belica?: SeedDato;
    responsabilidad_con_animales?: SeedDato;
    responsabilidad_laboral?: SeedDato;
}


type Resultado = Record<number, ResultadoMarca>;

export default function MarcasPage() {

    const marcas = initialData.marcas;
    //
    const favorites = useCriteriosStore(state => state.favorites)
    const favoritos = Object.values(favorites)
    //
    function mapToSections(criterios: Criterio[]): Sections {
        const result: Sections = {};

        for (const criterio of criterios) {
            const section = criterio.section as keyof Sections;

            if (!result[section]) {
                result[section] = [];
            }

            result[section]!.push(...criterio.variables);
        }
        console.log('result: ');
        console.log(result);
        return result;
    }
    const arrSections = mapToSections(favoritos);
    //
    function buildSectionsMap(sections: Sections): SectionsMap {
        const map: SectionsMap = {};

        for (const sectionKey in sections) {
            //const variables = sections[sectionKey];
            const key = sectionKey as keyof Sections; // 1
            const variables = sections[key]; // 2
            // 
            if (!variables) continue;

            map[sectionKey] = {};

            for (const variableObj of variables) {
                const variableName = variableObj.variable;
                map[sectionKey][variableName] = {};

                if (!variableObj.options) continue;

                for (const option of variableObj.options) {
                    if (option.value !== undefined && option.score !== undefined) {
                        map[sectionKey][variableName][option.value] = option.score;
                    }
                }
            }
        }

        return map;
    }
    //
    function calcularResultadosOptimizado(
        marcas: Marca[],
        sectionsMap: SectionsMap
    ):MarcasResultados {
        const result: Record<number, any> = {};

        for (const marca of marcas) {
            
            // variable de almacenamiento del score total de la marca
            let scoreTotalMarca = 0;

            const marcaResult = {
                id: marca.id,
                name: marca.name,
                category: marca.category,
                totalScore: 0,
                sections: {} as Record<string, number>
            };

            for (const sectionKey in marca.datos) {
                //const datosSeccion = marca.datos[sectionKey];
                const key = sectionKey as keyof SeedDatos;
                const datosSeccion = marca.datos[key];

                
                const sectionMap = sectionsMap[sectionKey];

                if (!datosSeccion || !sectionMap) continue;

                let suma = 0;

                for (const variableKey in datosSeccion) {
                    const valorSeleccionado = datosSeccion[variableKey];

                    const score =
                        sectionMap?.[variableKey]?.[valorSeleccionado];

                    if (score !== undefined) {
                        suma += score;
                        scoreTotalMarca += score;
                    }
                }
                marcaResult.sections[sectionKey] = suma;
            }
            // acá terminé de recorrer la marca, le asigno el total
            marcaResult.totalScore = scoreTotalMarca;
            result[marca.id] = marcaResult;
        }

        return result;
    }

    //
    const sectionsMap = buildSectionsMap(arrSections);
    const marcasResultados = calcularResultadosOptimizado(marcas, sectionsMap);

    console.log('resultados: ');
    console.log(marcasResultados);

    return (
        <>
            <MarcaGrid
                marcasResultados={marcasResultados}
            />

            <div className="hidden">
                <h1>Marca Page</h1>

                <p>tareas:</p>
                <p>las marcas deben ordenarse según la nota obtenida</p>
                <p>aplicar un sistema de color a los estilos de las notas</p>
                <p>agregar imagenes</p>
                <p>ver otros criterios interesantes como las promesas de la empresa, las condiciones del país, etc.</p>
                <p>ajustar estilo de textos para que no se oculten en pantallas pequeñas</p>
            </div>
        </>
    );
}

 */