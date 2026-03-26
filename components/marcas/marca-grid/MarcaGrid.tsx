'use client';

import { MarcasResultados } from "@/interfaces";
import { MarcaGridItem } from "./MarcaGridItem";

interface Props {
    //marcas: Marca[];
    marcasResultados: MarcasResultados;
}

export const MarcaGrid = ({ marcasResultados }: Props) => {

  return (
    <div className="grid grid-cols-1 p-5 sm:grid-cols-3 gap-10 mb-10">
      {Object.entries(marcasResultados).map(([id, marca]) => (
        /*<div key={id}>
          <div className="flex gap-5">
            <h2>{marca.name}</h2>
            <h2>{marca.totalScore}</h2>
          </div>

          {Object.entries(marca.sections).map(([section, score]) => (
            <p key={section}>
              {section}: {Number(score)}
            </p>
          ))}
        </div> */
        <MarcaGridItem
              key={id}
              marca={marca}
        />
      ))}
    </div>
  );

} // como puedo mapear result{}


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
