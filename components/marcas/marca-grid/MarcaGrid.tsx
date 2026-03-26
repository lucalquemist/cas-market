'use client';

import { MarcasResultados } from "@/interfaces";
import { MarcaGridItem } from "./MarcaGridItem";
import { MarcaTopMenu } from "./MarcaTopMenu";

interface Props {
  //marcas: Marca[];
  marcasResultados: MarcasResultados;
}

export const MarcaGrid = ({ marcasResultados }: Props) => {

  return (
    <div>
      <MarcaTopMenu />
      <div className="grid grid-cols-1 p-5 sm:grid-cols-3 gap-5 mb-10">
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
