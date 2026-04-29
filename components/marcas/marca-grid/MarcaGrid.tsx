'use client';

import { Marca2 } from "@/interfaces";
import { MarcaGridItem } from "./MarcaGridItem";
import { MarcaTopMenu } from "./marcaTopMenu/MarcaTopMenu";
import { initialData } from "@/seed/seed";
import { useMarcaStore } from "@/store";

interface Props {
  marcasResultados: Marca2[];
}
type Cats = 'Todas' | 'Alimentos' | 'Vestimenta' | 'HigienePersonal' | 'Software' | 'Electrónicos' | 'Servicios' | 'Vehiculos';
interface Categorias {
  Todas: number[],
  Alimentos: number[],
  Vestimenta: number[],
  HigienePersonal: number[],
  Software: number[],
  Electronicos: number[],
  Servicios: number[],
  Vehiculos: number[],
}

export const MarcaGrid = ({ marcasResultados }: Props) => {

  // const categorias = initialData.categorias as Categorias;

  const catSel: Cats = useMarcaStore(state => state.categorySelected)

  //let marcasResultados2: Marcas = {}
  let marcasResultadosFin: Marca2[] = []

  if (catSel === 'Todas') { 

    marcasResultadosFin = marcasResultados

  } else {

    marcasResultadosFin = marcasResultados.filter(f => f.category == catSel)
    
    //for (const marcares of categorias[catSel]) {
      //marcasResultados2[marcares] = marcasResultados[marcares]
    //}
  }

  //* ordenar las empresas segun su puntuación, cómo hago cuando no se selecciona ningún criterio¿ podriamos tener un criterio base de 0
  //* hay que actualizarla al quitar criterios
  
  return (
    <div>
      
      <MarcaTopMenu />

      <div className="grid grid-cols-1 p-5 sm:grid-cols-3 gap-5 mb-10 sm:max-w-300">
        {
          marcasResultadosFin.map(marca => (
            <MarcaGridItem
              key={marca.id}
              marca={marca}
            />
          ))
        }
      </div>
    </div>

  );

}


/*
*RESPALDO 
'use client';

import { Marcas, Marca, Marca2 } from "@/interfaces";
import { MarcaGridItem } from "./MarcaGridItem";
import { MarcaTopMenu } from "./marcaTopMenu/MarcaTopMenu";
import { initialData } from "@/seed/seed";
import { useMarcaStore } from "@/store";

interface Props {
  //marcasResultados: Marcas;
  marcasResultados: Marca2[];
}

interface Categorias {
  Todas: number[],
  Alimentos: number[],
  Vestimenta: number[],
  HigienePersonal: number[],
  Software: number[],
  Electronicos: number[],
  Servicios: number[],
  Vehiculos: number[],
}

type Cats = 'Todas' | 'Alimentos' | 'Vestimenta' | 'HigienePersonal' | 'Software' | 'Electronicos' | 'Servicios' | 'Vehiculos';

export const MarcaGrid = ({ marcasResultados }: Props) => {

  const categorias = initialData.categorias as Categorias;

  //const categorias2 = Object.keys(categorias);

  const catSel: keyof Categorias = useMarcaStore(state => state.categorySelected) // categoria seleccionada
  //console.log(categorias[catSel]); // tengo el arreglo de ids

  // * vamos a crear el algoritmo que cree todas las colecciones de marcas dentro de cada categoria y las almacenamos en el store 
  // * TODO

  let marcasResultados2: Marcas = {}
  let marcasResultados3: Marca[] = []

  // * filtramos la categoria seleccionada

/*
  if (catSel === 'Todas') {
    marcasResultados2 = marcasResultados
    marcasResultados3 = Object.values(marcasResultados).sort((a, b) => b.score['total'] - a.score['total'])

  } else {
    for (const marcares of categorias[catSel]) {
      marcasResultados2[marcares] = marcasResultados[marcares]

    }
  }
  */


  // ordeno las empresas segun su puntuación
//   marcasResultados3 = Object.values(marcasResultados2).sort((a, b) => b.score['total'] - a.score['total'])
//   console.log('arreglo de marcas: ')
//   console.log(marcasResultados3)

//   return (
//     <div>
//       <MarcaTopMenu />

//       <div className="grid grid-cols-1 p-5 sm:grid-cols-3 gap-5 mb-10 sm:max-w-300">
//         {
//           marcasResultados3.map(marca => (
//             <MarcaGridItem
//               key={marca.id}
//               marca={marca}
//             />
//           ))
//         }
//       </div>
//     </div>

//   );

// }
