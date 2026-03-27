'use client';

import { MarcasResultados } from "@/interfaces";
import { MarcaGridItem } from "./MarcaGridItem";
import { MarcaTopMenu } from "./MarcaTopMenu";

interface Props {
  //marcas: Marca[];
  marcasResultados: MarcasResultados;
}

interface Categories {
  [category: string]: MarcasResultados;
}

export const MarcaGrid = ({ marcasResultados }: Props) => {

  // algoritmo que agrupa las marcas en un objeto según el tipo de marca
  // recorro las marcas y en cada una pregunto por la categoría, si no existe esa llave en el objeto resultado
  // entonces la creo y luego le asigno esa marca a el arreglo de esa posicion
  
  function mapToCategory(marcasResultados: MarcasResultados): Categories {
    
    const result: Categories = {};
    const marcasResultados2 = Object.entries(marcasResultados);

    for (const marca of marcasResultados2) {
      //const category = marca
    }

    return result;
  }

  /**
   * function mapToSections(criterios: Criterio[]): Sections {
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
   */

  return (
    <div>
      <MarcaTopMenu />

      <div className="grid grid-cols-1 p-5 sm:grid-cols-3 gap-5 mb-10 sm:max-w-300">
        {Object.entries(marcasResultados).map(([id, marca]) => (
          <MarcaGridItem
            key={id}
            marca={marca}
          />
        ))}
      </div>
    </div>

  );

}

/*
* tengo que agrupar las marcas según el tipo de producto
* puedo hacer un algoritmo que agrupe las marcas en grupos en un objeto
* luego a cada botón le hago acceder a esa parte del objeto de grupos
* 
*/

/*
export const MarcaGrid = ({ marcas }: Props) => {

    return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
          marcas.map(marca => (
            <MarcaGridItem
              key={marca.id}
              marca={marca}
            />
          ))
        }
      </div>
  )
}*/

/*
'use client';

import { useCriteriosStore } from "@/store";
import { Criterio } from "@/interfaces";
import { CriterioGridItem } from "./CriterioGridItem";
import { MarcaTopMenu } from './MarcaTopMenu';


interface Props {
  criterios: Criterio[];
}


export const CriterioGrid = ({ criterios }: Props) => {

  const favorites = useCriteriosStore(state => state.favorites)
  const favoritos = Object.values(favorites)

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
          // aca vamos a mostrar unicamente los favoritos
          favoritos.map(criterio => (
            <CriterioGridItem
              key={criterio.title}
              criterio={criterio}
            />
          ))
        }
      </div>

      <hr className="border-t-4 border-blue-500 w-full pb-10" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
          criterios.map(criterio => (
            <CriterioGridItem
              key={criterio.title}
              criterio={criterio}
            />
          ))
        }
      </div>

    </div>
  )
}*/
