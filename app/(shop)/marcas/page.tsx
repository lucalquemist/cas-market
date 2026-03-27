'use client';

import { initialData } from "@/seed/seed";
import { MarcaGrid } from "@/components";
import { useCriteriosStore } from "@/store";
import { Criterio, Marca, MarcasResultados } from '@/interfaces';

// const marcasResults = initialData.marcasResultados;
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

            const marcaResult = { // acá agrego el id
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
                <p>arriba vamos a mostrar una barra en la que podemos filtrar distintas categorias de marcas</p>
                <p>aplicar un sistema de color a los estilos de las notas</p>
                <p>agregar imagenes</p>
                <p>ver otros criterios interesantes como las promesas de la empresa, las condiciones del país, etc.</p>
                <p>ajustar estilo de textos para que no se oculten en pantallas pequeñas</p>
                <p>corregir los estilos de los criterios</p>
            </div>
        </>
    );

}



/**
 * criterios dinamicos
 * primer paso: el usuario elige uno o mas criterios
 * segundo paso: el usuario va a la pagina de marcas
 * ahí se hace el calculo dinamico: recorremos las marcas en cada marca  
 * accedemos a los criterios cuyas variables sean del tipo de variables mencionado en las marcas
 * y buscamos el score en el criterio para la opcion seleccionada por el usuario
 * luego ademas del calculo total también hacemos el objeto de tipo resultado en console.log

*/

/*
    function logArrayElements(element: any, index: any, array: any) {
        console.log("a[" + index + "] = " + element);
    }
    // Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
    [2, 5, , 9].forEach(logArrayElements);
    // salida:
    // a[0] = 2
    // a[1] = 5
    // a[2] = 9

    // accedemos a las marcas
    const marcas = initialData.marcas;
    // accedemos al estado para obtener los criterios favoritos
    // const favoritos = useCriteriosStore( state => state.favorites )
    //console.log(favoritos);
    const favorites = useCriteriosStore(state => state.favorites)
    const favoritos = Object.values(favorites)
    // tengo una coleccion de objetos:
    // transformo el arreglo de criterios en un arreglo de secciones
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
    console.log('listorti');

    
    // hasta acá tenemos el arreglo con las marcas y el arreglo con las secciones
    // queremos recorrer el arreglo de marcas y agregarle su nota
    marcas.forEach(marca => {
        (Object.keys(marca.datos) as Array<keyof SeedDato>).forEach((key) => {
            (Object.keys(marca.datos[key]) as Array<keyof SeedVar>).forEach((llave) => { // recorriendo los objetos variables dentro de marca
                console.log(marca.datos[key][llave]); // esto es la opcion de la variable elegida por la empresa

                // en arr sections tengo un score

                // const varMatch: SeedVar | undefined = arrSections[key as keyof Sections]?.find( variable => {
                const varMatch: SeedVar | undefined = arrSections[key as keyof Sections]?.find( variable => {
                    String(variable.variable) === String(marca.datos[key]) // esto en teoria retorna la variable correspondiente
                })
                console.log(varMatch) // hmm . . . 

                // hacemos ingenieria inversa, el objeto deberia verse asi
                // const result = {};
                // en cada iteracion el objeto de resultados va guardando las marcas, dentro de cada una guarda sus secciones 
                // y dentro de las mismas almacena el valor acumulativo de cada variable 
                // result[marca.id][sectionEmp] += listaSections[sectionEmp][variableEmp][optionSelEmp]

            });
        });
    }); */

/*
preparamos la pregunta a la ia
tengo por un lado el objeto sections:
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
por otro lado tengo la lista de marcas con este formato:
interface SeedMarca {
    id: number;
    name: string;
    datos: SeedDatos;
}
interface SeedDatos {
    responsabilidad_en_el_manejo_de_datos?: SeedDato;
    responsabilidad_belica?: SeedDato;
    responsabilidad_con_animales?: SeedDato;
    responsabilidad_laboral?: SeedDato;
}
interface SeedDato {
    [key: string]: any;
}
se pide un algoritmo capaz de crear un arreglo o un objeto en el cual tengamos almacenado el nombre de cada marca y dentro de cada marca
almacenamos sus sections y dentro de cada section almacenamos la suma del valor del score 

en cada iteracion el objeto de resultados va guardando las marcas, dentro de cada una guarda sus secciones 
y dentro de las mismas almacena el valor acumulativo de cada variable

recorremos el arreglo de las marcas y en cada marca recorremos los datos y en cada dato recorremos las variables y en cada variable
vamos al objeto de las sections en la seccion actual en la variable actual y en la opcion seleccionada, el valor deberia ser el score
entonces almacenamos la sumativa de ese escore en ese lugar del resultado, creo que la solucion deberia ser mas o menos así pero
para esto es necesario modificar previamente las interfaces o no
result[marca.id][sectionEmp] += listaSections[sectionEmp][variableEmp][optionSelEmp]

*/

/*
// vamos a simplificar un poco los archivos para poder hacer el algoritmo



    // función para ejecutar en cada marca
    //function calcularValorMarcas(element: Marca, index: any, array: any) {
    //console.log(element);
    //console.log(element[favoritos[0].variables[].])
    //}
    //marcas.forEach(calcularValorMarcas);

    // recorremos el arreglo de marcas y en cada una accedemos a la categoria de las variables
    //marcas.map( marca => (
    // en cada marca recorremos todas las secciones

    // en cada marca vamos a recorrer todos los criterios seleccionados hasta completarlos
    //favoritos.map( favorito => (
    //console.log(favorito.variables[0].variable)

    // 
    //)) 
    //))

marcas.forEach(marca => {

        // marca.datos
        (Object.keys(marca.datos) as Array<keyof SeedDato>).forEach((key) => (

            Object.keys(marca.datos[key]) as Array<keyof SeedVar>).map((llave) => (
                // esta es la opcion que corresponde a la empresa en cuestion
                console.log(marca.datos[key][llave])
                //arrSections[key as keyof Sections]?.forEach( variable => {
                    
                //})
            )            
        )
    })
marcas.forEach( marca => {
        marca.datos.forEach( dato => {
            console.log(dato);
            // accedo a la seccion quiero acceder a la primer propiedad del dato
            (Object.keys(dato) as Array<keyof SeedDato>).map((key) => (
                // estoy recorriendo cada variable de la marca
                // entoncecs entro a cada variable del criterio a buscar la nota
                arrSections[key as keyof Sections]?.forEach( variable => {

                })
                // en lugar de un foreach hay que hacer una busqueda
                // en lugar de una busqueda hay que anidar objetos


                // console.log('')
                
            ))

        })
    })
 */