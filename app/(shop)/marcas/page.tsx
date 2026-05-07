'use client';

import { initialData } from "@/seed/seed";
import { MarcaGrid } from "@/components";
import { useCriteriosStore, useMarcaStore, usePaisesStore } from "@/store";
import { Criterio2, Marca2, Pais } from '@/interfaces';
import { useEffect } from "react";

interface ObjPaises {
    [key: string]: Pais;
}

export default function MarcasPage() {

    const paises: Pais[] = initialData.paises;
    const marcas2: Marca2[] = initialData.marcas2;
    //const criterios2: Criterio2[] = initialData.criterios2;

    const favorites = useCriteriosStore(state => state.favorites);
    const favoritos = Object.values(favorites)
    const updateMarcasScore = useMarcaStore(state => state.updateMarcasScore)
    const updatePaisesScore = usePaisesStore(state => state.updatePaisesScore)

    function calcularPuntosMarcasPaises(criterios: Criterio2[], paises: Pais[]): Pais[] {

        for (const paisi of paises) { //* cada vez que entro a la pagina borro las notas anteriores de los paises, optimizar *
            paisi.puntuacion.criterios = { 'total': { puntos: 0, porcentaje: 0 } }
            paisi.puntuacion.sections = { 'total': { puntos: 0, porcentaje: 0 } }
        }

        //* calcular los puntos de los paises, luego agregar los puntos a la marca
        for (const criterio of criterios) {

            if (criterio.implicado !== 'paises') { continue }

            for (const pais of paises) {

                let puntosCriterio = 0; // acumula los puntos totales del criterio 

                if (!pais.puntuacion.criterios['total']) {
                    pais.puntuacion.criterios['total'] = { puntos: 0, porcentaje: 0 }
                }
                if (!pais.puntuacion.sections['total']) {
                    pais.puntuacion.sections['total'] = { puntos: 0, porcentaje: 0 }
                }

                for (const variable of pais.variables) {

                    if (criterio.variables[variable.variable]) { // chequeamos si la variable está en este criterio

                        variable.criterioNombre = criterio.title; // agregamos el nombre del criterio en la variable

                        if (criterio.variables[variable.variable]?.formula) { // en caso de que tenga fórmula

                            switch (criterio.variables[variable.variable]?.formula) {
                                case 'multiplicacion':
                                    variable.puntos = criterio.variables[variable.variable].options['multiplicacion'].score * variable.valor;
                                    puntosCriterio += variable.puntos; // acumulo los puntos de las variables        
                                    break;
                                case 'valor2':
                                    break;
                                default:
                                    console.log('no se ejecutó ninguna función de calculo de puntos de paises');
                            }

                        } else if (criterio.variables[variable.variable].options[variable.valor]) { // la opción elegida es válida

                            variable.puntos = criterio.variables[variable.variable].options[variable.valor].score; // agregamos la puntuación que corresponda 

                            puntosCriterio += variable.puntos; // acumulo los puntos de las variables
                        }
                    }
                }

                if (!pais.puntuacion.criterios[criterio.slug] && puntosCriterio < 0) { // hay puntos, los asigno //? estoy acá
                    pais.puntuacion.criterios[criterio.slug] = { puntos: puntosCriterio, porcentaje: 0 }
                    pais.puntuacion.criterios['total'].puntos += puntosCriterio;

                    if (!pais.puntuacion.sections[criterio.section] && puntosCriterio < 0) { // hay puntos, los asigno
                        pais.puntuacion.sections[criterio.section] = { puntos: puntosCriterio, porcentaje: 0 }
                        pais.puntuacion.sections['total'].puntos += puntosCriterio;
                    } else if (pais.puntuacion.sections[criterio.section] && puntosCriterio < 0) {
                        pais.puntuacion.sections[criterio.section].puntos += puntosCriterio
                        pais.puntuacion.sections['total'].puntos += puntosCriterio;
                    }

                } else if (pais.puntuacion.criterios[criterio.slug] && puntosCriterio < 0) {
                    //* console.log('el hecho de que entre acá significa que estoy haciendo algo mal con las normas dereact...') 
                }

                //console.log('pais variables');
                //console.log(pais.variables)

            }
        }
        console.log('paises actualizados con info de criterios: ');
        console.log(paises);

        return paises;
    }

    //? *** NUEVO ALGORITMO *********************************************************************************************************************
    function calcularScoresNuevo(criterios: Criterio2[], marcas: Marca2[]): Marca2[] {

        for (const marcai of marcas) { //* cada vez que entro a la pagina borro las notas anteriores de las marcas, optimizar *
            marcai.puntuacion.criterios = { 'total': { puntos: 0, porcentaje: 0 } }
            marcai.puntuacion.sections = { 'total': { puntos: 0, porcentaje: 0 } }
            
            for (const vari of marcai.variables) { //* cada vez que entro a la pagina borro las notas de las variables
                vari.puntos = 0;
                vari.criterioNombre = '';

                // if (vari.seccion == 'responsabilidad_pais') { }
            }
            // en cada marca filtro las variables, descartando las de paises
            const variablesFiltradas = marcai.variables.filter(v => {
                return v.seccion !== 'responsabilidad_pais'
            })
            marcai.variables = variablesFiltradas;
        } 

        // calcularPuntosMarcasPaises(criterios, paises);
        sumarMarcaPais(marcas, paisesAct); // le agrega los puntos de los paises a las marcas

        for (const criterio of criterios) { // recorremos los criterios

            if (criterio.implicado !== 'empresas') { continue } // esta funcion es para empresas

            for (const marca of marcas) { // en cada criterio recorremos todas las marcas

                let puntosCriterio = 0; // acumula los puntos totales del criterio

                if (!marca.puntuacion.criterios['total']) { // agreagamos este campo
                    marca.puntuacion.criterios['total'] = { puntos: 0, porcentaje: 0 }
                }
                if (!marca.puntuacion.sections['total']) { // agreagamos este campo
                    marca.puntuacion.sections['total'] = { puntos: 0, porcentaje: 0 }
                }

                for (const variable of marca.variables) { // recorremos las variables de la marca //*

                    if (criterio.variables[variable.variable]) { // chequeamos si la variable está en este criterio

                        variable.criterioNombre = criterio.title // agregamos el nombre del criterio en la variable

                        if (criterio.variables[variable.variable].options[variable.valor]) { // la opción elegida es válida

                            variable.puntos = criterio.variables[variable.variable].options[variable.valor].score * criterio.ratio //* agregamos la puntuación que corresponda 

                            puntosCriterio += variable.puntos // acumulo los puntos de las variables
                        }
                    }
                }

                if (!marca.puntuacion.criterios[criterio.slug] && puntosCriterio < 0) { // hay puntos, los asigno //? estoy acá
                    marca.puntuacion.criterios[criterio.slug] = { puntos: puntosCriterio, porcentaje: 0 }
                    marca.puntuacion.criterios['total'].puntos += puntosCriterio

                    if (!marca.puntuacion.sections[criterio.section] && puntosCriterio < 0) { // hay puntos, los asigno
                        marca.puntuacion.sections[criterio.section] = { puntos: puntosCriterio, porcentaje: 0 }
                        marca.puntuacion.sections['total'].puntos += puntosCriterio
                    } else if (marca.puntuacion.sections[criterio.section] && puntosCriterio < 0) {
                        marca.puntuacion.sections[criterio.section].puntos += puntosCriterio
                        marca.puntuacion.sections['total'].puntos += puntosCriterio
                    }

                } else if (marca.puntuacion.criterios[criterio.slug] && puntosCriterio < 0) {
                    //* console.log('el hecho de que entre acá significa que estoy haciendo algo mal con las normas dereact...') 
                }
            }
        }
        marcas.sort((a, b) => b.puntuacion.criterios['total'].puntos - a.puntuacion.criterios['total'].puntos)// ordenamos las marcas por puntuación obtenida
        
        console.log('marcas actualizadas con info de criterios: ')
        console.log(marcas)
        return marcas;
    }

    //* función para agregar los puntos de los paises en las marcas
    function sumarMarcaPais(marcas: Marca2[], paisesi: Pais[]) {

        const paises: ObjPaises = {}
        for(const pais of paisesi) { paises[pais.nombre] = pais; }
        //-------------------------------------------------------------------------------------------------------

        for(const marca of marcas) {
        
            let puntosMarcaPais = 0;
            let partes = 0;

            for(const etapa of marca.etapas) { // recorro todas las etapas 
                // multiplico la nota por la participación y obtengo los puntos y los voy acumulando
                if(paises[etapa.pais]) {
                    etapa.puntos = paises[etapa.pais].puntuacion.sections['total'].puntos * etapa.participacion;
                    puntosMarcaPais += etapa.puntos;
                    partes += etapa.participacion;

                    if(!marca.variables.find( v => v.variable == etapa.pais)) {
                        //* transformo la etapa en variable y la agrego a la marca
                        marca.variables.push({
                            variable: etapa.pais,
                            seccion: 'responsabilidad_pais',
                            criterioNombre: 'criterios_de_paises',
                            valor: `${etapa.participacion} participaciones`,
                            puntos: parseFloat((paises[etapa.pais].puntuacion.sections['total'].puntos * 0.1).toFixed(0)),
                            fuente: ''
                        })
                    }

                }
            }
            // en cada marca agrego el acumulado en scores/criterio/paises y en scores/secciones/paises
            if(0 < partes) {

                //if (marca.puntuacion.criterios['responsabilidad_pais'] || marca.puntuacion.sections['responsabilidad_pais']) { continue }

                let puntosProm = puntosMarcaPais / partes
                /*
                console.log('partes');
                console.log(partes);
                console.log('puntosMarcaPais');
                console.log(puntosMarcaPais);
                console.log('puntosProm');
                console.log(puntosProm);*/

                let puntosF = parseFloat((puntosProm *= 0.1).toFixed(0));
                marca.puntuacion.criterios['responsabilidad_pais'] = { puntos: puntosF, porcentaje: 0 }
                marca.puntuacion.sections['responsabilidad_pais'] = { puntos: puntosF, porcentaje: 0 }
                // si no existen los totales los creamos, les sumamos los puntos
                if (!marca.puntuacion.criterios['total']) { // agreagamos este campo
                    marca.puntuacion.criterios['total'] = { puntos: puntosF, porcentaje: 0 }
                } else {
                    marca.puntuacion.criterios['total'].puntos += puntosF
                }
                if (!marca.puntuacion.sections['total']) { // agreagamos este campo
                    marca.puntuacion.sections['total'] = { puntos: puntosF, porcentaje: 0 }
                } else {
                    marca.puntuacion.sections['total'].puntos += puntosF
                }

                // agregamos las etapas como variables en la marca
                
                //marca.variables


            }
                        
        }
    }

    const paisesAct = calcularPuntosMarcasPaises(favoritos, paises);
    updatePaisesScore(paisesAct);
    // sumarMarcaPais(marcas2, paisesAct);
    const marcas3 = calcularScoresNuevo(favoritos, marcas2);
    updateMarcasScore(marcas3);

    //useEffect(() => { // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
    //updateMarcasScore(marcas3);
    //}, []);

    return (
        <MarcaGrid
            marcasResultados={marcas3}
        />
    )
}

/*
* aplicar un sistema de color a los estilos de las notas
* agregar imagenes
* ajustar estilo de textos para que no se oculten en pantallas pequeñas
*/


/*
'use client';

import { initialData } from "@/seed/seed";
import { MarcaGrid } from "@/components";
import { useCriteriosStore, useMarcaStore } from "@/store";
import {
    Criterio2,
    Marca2,
    Criterio, Sections, Variable, Option,
    Marcas, Marca, Secciones, Variables,
    Pais, Secciones2, 
    SeedEtapa
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
    const paises: Pais[] = initialData.paises;

    const marcas2: Marca2[] = initialData.marcas2;
    const criterios2: Criterio2[] = initialData.criterios2;

    const favorites = useCriteriosStore(state => state.favorites);
    const updateMarcasScore = useMarcaStore(state => state.updateMarcasScore)
    
    function buildSectionsMapFromCriterios(criterios: Criterio[]): SectionsMap {

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
                            // si el option.value es "*" entonces el option.score va a ser el multiplicador
                            map[section][variableName][option.value] = option.score;
                        }
                    }
                }

            }
        }
        return map;
    }

    const sectionsMap = buildSectionsMapFromCriterios(Object.values(favorites));
    //console.log('sectionsMap resumido: ');
    //console.log(sectionsMap);

    function calcularResultadosOptimizado(
        marcas: Marca[],
        sectionsMap: SectionsMap
    ): Marcas {
        const result: Record<number, any> = {};

        const puntosPaises = calcularPuntosPaises(paises, sectionsMap); // calculamos la puntución de los paises

        for (const marca of marcas) {

            let scoreTotalMarca = 0;

            const marcaResult: Marca = { // habria que transformar esto en el objeto de marca y completarlo, despues hay que buscar una forma de copiarlo mas sencilla
                id: marca.id,
                name: marca.name,
                slug: marca.slug,
                category: marca.category,
                etapas: marca.etapas,
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

                for (const variableKey in datosSeccion) { // variableKey es cada variable dentro de la seccion de la marca //? estoy acá
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

            //* algoritmo de calculo de puntos de pais en empresa
            let acumuladoParticipacion = 0;
            let acumuladoScore = 0;
            
            for (const etapa of marca.etapas) { // recorremos las etapas

                let subPxP = 0;
                if(!!puntosPaises[etapa.pais]?.score['total']) { // ¿hay score para ese país?

                    subPxP = puntosPaises[etapa.pais]?.score['total'] * etapa.participacion //puntos del pais * participaciones
                    acumuladoScore += subPxP // luego los voy acumulando todos sumandolos
                    acumuladoParticipacion += etapa.participacion // por otro lado voy acumulando la suma de las participaciones
                }
            }

            if(acumuladoParticipacion > 0) { // hay por lo menos 1 pais puntuado en la marca
                const totalScorePaisesPromedio = acumuladoScore / acumuladoParticipacion * 0.1; // divido los dos y me da el promedio
                marcaResult.score['paises'] =  parseFloat(totalScorePaisesPromedio.toFixed(0))
                marcaResult.score['total'] = parseFloat((scoreTotalMarca + totalScorePaisesPromedio).toFixed(0));
                // agrego a las secciones de la marca la responsabilidad por lo que hace su pais
                if(!marcaResult.sections['responsabilidad_pais']) {
                    marcaResult.sections['responsabilidad_pais'] = {}
                    if(!marcaResult.sections['responsabilidad_pais']['total']) {
                        marcaResult.sections['responsabilidad_pais'] = {total:{valor:'p', score: parseFloat(totalScorePaisesPromedio.toFixed(0))}} 
                        //marcaResult.sections['responsabilidad_pais']['total'].score = totalScorePaisesPromedio
                    }
                }
                
            } else {
                marcaResult.score['total'] = scoreTotalMarca;
            }

            result[marca.id] = marcaResult;
        }
        //console.log('gggggggggggggggggggggggggggg');
        //console.log(result);
        return result;
    }

    // funcion para calcular las puntuaciones de los paises
    function calcularPuntosPaises( paises: Pais[], sectionsMap: SectionsMap ): Record<string, any> {

        const result: Record<string, any> = {};


        for (const pais of paises) {

            let scoreTotalPais = 0;

            const paisResult: Pais = {
                nombre: pais.nombre,
                score: {
                    total: 0
                },
                sections: {},
            }

            for (const sectionKey in pais.sections) { // pais.sections son las Secciones, sectionKey es cada seccion

                const key = sectionKey as keyof Secciones2; // se asigna, key es cada seccion
                const datosSeccion = pais.sections[key];    // datosSeccion es el conjunto de variables de la seccion del pais
                const sectionMap = sectionsMap[sectionKey]; // sectionMap es el objeto con las variables de la categoria "sectionKey"
                //console.log('sectionsMap: ')
                //console.log(sectionsMap)
                //console.log('sectionMap: ') // los undefined son por la categoría justicia para la cual no hay criterios ahun
                //console.log(sectionMap)
                if (!datosSeccion || !sectionMap) continue; // hay variables en la marca  y hay variables en criterio //*no paso de aca
                let suma = 0;

                for (const variableKey in datosSeccion) { // variableKey es cada variable dentro de la seccion de la marca

                    const valorSeleccionado = datosSeccion[variableKey].valor; // valor del pais en esa variable 

                    let score = 0;
                    if (sectionMap?.[variableKey]?.['*']) {
                        score = sectionMap?.[variableKey]?.['*'] * valorSeleccionado
                    } else {
                        score = sectionMap?.[variableKey]?.[valorSeleccionado]; //? estoy acá
                    }

                    if (pais.sections[key]) {
                        pais.sections[key][variableKey].score = score; // asignamos el score en la variable
                    }
                    datosSeccion[variableKey].score = score;

                    if (score !== undefined) {
                        suma += score;
                        scoreTotalPais += score;
                    }
                }
                // asignamos la variable con su opcion seleccionada y score a la seccion resultado, está fuera del if porque la agregamos de todos modos
                paisResult.sections[key] = pais.sections[key]
                // marcaResult.sections[sectionKey] = suma; // esto va tambien en el score, y las sections¿
                paisResult.score[sectionKey] = suma;

            }
            // acá terminé de recorrer la marca, le asigno el total
            paisResult.score['total'] = scoreTotalPais;
            result[pais.nombre] = paisResult;
        }
        //console.log('resultados de los paises: ')
        //console.log(result)

        //return paises; //devuelvo los paises con sus respectivos puntos
        return result;
    }

    // const puntosPaises = calcularPuntosPaises(paises, sectionsMap);
    calcularPuntosPaises(paises, sectionsMap);


    const marcasResultados = calcularResultadosOptimizado(marcas, sectionsMap);

    //console.log('resultado marcas: ');
    //console.log(marcasResultados);
    
    useEffect(() => { // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
        updateMarcasScore(marcasResultados);
    }, []);
    
    //? *** NUEVO ALGORITMO *********************************************************************************************************************
    function calcularScoresNuevo(criterios: Criterio2[], marcas: Marca2[]) {

        for (const criterio of criterios) { // recorremos los criterios

            if(criterio.implicado !== 'empresas') { continue } // esta funcion es para empresas

            for (const marca of marcas) { // en cada criterio recorremos todas las marcas
                
                let puntosCriterio = 0 // acumula los puntos totales del criterio

                if(!marca.puntuacion.criterios['total']) {
                    marca.puntuacion.criterios['total'] = { puntos: 0, porcentaje: 0 }
                }
                if(!marca.puntuacion.sections['total']) {
                    marca.puntuacion.sections['total'] = { puntos: 0, porcentaje: 0 }
                }

                for (const variable of marca.variables) { // recorremos las variables de la marca
                    
                    if(criterio.variables[variable.variable]) { // chequeamos si la variable está en este criterio

                        variable.criterioNombre = criterio.title // agregamos el nombre del criterio en la variable

                        if(criterio.variables[variable.variable].options[variable.valor]) { // la opción elegida es válida
                            
                            variable.puntos = criterio.variables[variable.variable].options[variable.valor].score // agregamos la puntuación que corresponda 
                            
                            puntosCriterio += variable.puntos // acumulo los puntos de las variables
                        }
                    }
                }

                if (!marca.puntuacion.criterios[criterio.slug] && puntosCriterio < 0) { // hay puntos, los asigno
                    marca.puntuacion.criterios[criterio.slug] = { puntos: puntosCriterio, porcentaje: 0 } 
                    marca.puntuacion.criterios['total'].puntos += puntosCriterio //* el total aun no existe...

                    //* acá adentro también debería poder agregar la puntuación de las secciones
                    if (!marca.puntuacion.sections[criterio.section] && puntosCriterio < 0) {
                        marca.puntuacion.sections[criterio.section] = { puntos: puntosCriterio, porcentaje: 0 } 
                        marca.puntuacion.sections['total'].puntos += puntosCriterio
                    } else if(marca.puntuacion.sections[criterio.section] && puntosCriterio < 0) {
                        marca.puntuacion.sections[criterio.section].puntos += puntosCriterio
                        marca.puntuacion.sections['total'].puntos += puntosCriterio
                    }

                } else if(marca.puntuacion.criterios[criterio.slug] && puntosCriterio < 0) {
                    //* console.log('el hecho de que entre acá significa que estoy haciendo algo mal con las normas dereact...') 
                }
            }
        }
        //* al terminar debemos guardar las marcas en el estado
        console.log('marcas actualizadas con info de criterios: ')
        console.log(marcas)
    }
    calcularScoresNuevo(criterios2, marcas2);
    
    return (
        <MarcaGrid
            marcasResultados={marcasResultados}
        />
    )
}
*/