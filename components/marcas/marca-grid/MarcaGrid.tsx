'use client';

import { Marcas, Marca } from "@/interfaces";
import { MarcaGridItem } from "./MarcaGridItem";
import { MarcaTopMenu } from "./marcaTopMenu/MarcaTopMenu";
import { initialData } from "@/seed/seed";
import { useMarcaStore } from "@/store";

interface Props {
  marcasResultados: Marcas;
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
  if (catSel === 'Todas') {
    marcasResultados2 = marcasResultados
    marcasResultados3 = Object.values(marcasResultados).sort((a, b) => b.score['total'] - a.score['total'])

  } else {
    for (const marcares of categorias[catSel]) {
      marcasResultados2[marcares] = marcasResultados[marcares]

    }
  }

  // * ordeno las empresas segun su puntuación
  marcasResultados3 = Object.values(marcasResultados2).sort((a, b) => b.score['total'] - a.score['total'])
  console.log('arreglo de marcas: ')
  console.log(marcasResultados3)

  return (
    <div>
      <MarcaTopMenu />

      <div className="grid grid-cols-1 p-5 sm:grid-cols-3 gap-5 mb-10 sm:max-w-300">
        {
          marcasResultados3.map(marca => (
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
{Object.entries(marcasResultados2).map(([id, marca]) => (
          <MarcaGridItem
            key={id}
            marca={marca}
          />
        ))}
*/
/**
 * 'use client';

import { MarcasResultados } from "@/interfaces";
import { MarcaGridItem } from "./MarcaGridItem";
import { MarcaTopMenu } from "./marcaTopMenu/MarcaTopMenu";
import { initialData } from "@/seed/seed";
import { useMarcaStore } from "@/store";

interface Props {
  //marcas: Marca[];
  marcasResultados: MarcasResultados;
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

  // empresas por categoría, es un objeto del seed
  const categorias = initialData.categorias as Categorias; // esto puede ir dentro del topmenu de marca
  // const categorias2 = Object.values(categorias);
  const categorias2 = Object.keys(categorias);
  //* recupero la categoria seleccionada
  const catSel: keyof Categorias = useMarcaStore(state => state.categorySelected)

  console.log(categorias[catSel]); // tengo el arreglo de ids

  // creamos otro objeto igual al de resultados pero solo con los de la categoria
  let marcasResultados2: MarcasResultados = {}
  for (const marcares of categorias[catSel]) {
    marcasResultados2[marcares] = marcasResultados[marcares]
  }

  return (
    <div>
      <MarcaTopMenu />

      <div className="grid grid-cols-1 p-5 sm:grid-cols-3 gap-5 mb-10 sm:max-w-300">
        {Object.entries(marcasResultados2).map(([id, marca]) => (
          <MarcaGridItem
            key={id}
            marca={marca}
          />
        ))}
      </div>
    </div>

  );

}

 */