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
      <p className="mb-3">Criterios seleccionados:</p>
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
      <p className="mb-3">Todos los criterios:</p>

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
}
