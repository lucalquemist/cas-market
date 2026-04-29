'use client';

import { Criterio2 } from "@/interfaces";
import { useCriteriosStore } from "@/store";
import Link from "next/link";
// import Image from "next/image";

interface Props {
  criterio: Criterio2;
  // className?: string;
}

export const MainCriterio = ({ criterio }: Props) => {

  const addFavorite = useCriteriosStore(state => state.addFavorite)
  const removeFavorite = useCriteriosStore(state => state.removeFavorite)
  const favorite = useCriteriosStore( //state => !!state.favorites[criterio.id]
    state => !!state.favorites.find(c => c.id == criterio.id)
  )
  const handleClick = () => {
    if (favorite) {
      removeFavorite(criterio.id)
    } else {
      addFavorite(criterio)
    }
    //* al quitar un criterio no se actualizan las marcas
  }

  return (
    //<div className={ className }>
    // <div className="p-3 rounded-md overflow-hidden fade-in border max-w-300">
    <div className="min-w-full p-2">

      <p className="text-2xl">{criterio.title}</p>

      <div className="flex justify-between align-middle items-center">
        <div className="mt-5 mb-2 max-w-60" onClick={handleClick}>
          <p className="flex justify-center bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all cursor-pointer">
            {favorite ? 'cancelar suscricpción' : 'suscribir'}
          </p>
        </div>
        <Link href={`/criterios`} className="bg-blue-600 pl-3 pr-3 rounded">
          {'Volver'}
        </Link>
      </div>

      <div className="pt-2 flex flex-col max-w-300">
        <p>{criterio.description}</p>

        <p className="mt-2 mb-2">Se aplica a: {criterio.implicado}</p>

        <p>Tipo: {criterio.tipo}</p>

        {/* <div className="mt-2 flex items-center">
          <p>Ratio:</p>
          <div className="flex mx-2 items-center">
            <div className="flex justify-center text-2xl bg-blue-600 hover:bg-blue-800 text-white px-4 rounded transition-all cursor-pointer"><p> - </p></div>
            <div className="px-4 text-2xl"><p>{(criterio.ratio).toFixed(1)}</p></div>
            <div className="flex justify-center text-2xl bg-blue-600 hover:bg-blue-800 text-white px-4 rounded transition-all cursor-pointer"><p> + </p></div>
          </div>
        </div> */}

        <p className="mt-3">Variables: </p>
        {
          Object.entries(criterio.variables).map(entry => {
            console.log(criterio.variables)
            const [key, variable] = entry
            return (
              <div key={key}>

                <hr className="border-t-2 border-blue-gray w-full mt-3 mb-3" />

                <p className="rounded-xs">
                  <span className="min-w-40 bg-gray-800 pt-1 pl-1 pr-1 pb-1 rounded-xs">
                    {key}
                  </span>
                  {variable.description}
                </p>

                <p className="pl-5 mt-3">Opciones: </p>

                <div className="pl-5">
                  {
                  Object.entries(variable.options).map(entry => {

                    const [option, value] = entry

                    const valueStr = String(option);
                    const ocultar = valueStr.startsWith('*') || valueStr.startsWith('/');

                    return (
                      <div key={option} className="mb-2 flex w-fit">
                        <p className="bg-amber-800 rounded-xs pt-1 pl-1 pr-1 pb-1">

                          {!ocultar && (
                            <span className="min-w-40 bg-gray-800 pt-1 pl-1 pr-1 pb-1 rounded-xs">
                              {valueStr}: {value.score}
                            </span>
                          )} {value.description}
                        </p>
                      </div>
                    );
                  })
                  }
                </div>
              </div>
            )

          })
        }
        <hr className="border-t-2 border-gray-500 w-full mt-5 mb-5" />

        <div className="flex justify-between align-middle items-center">
          <div className="mt-5 mb-2 max-w-60" onClick={handleClick}>
            <p className="flex justify-center bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all cursor-pointer">
              {favorite ? 'cancelar suscricpción' : 'suscribir'}
            </p>
          </div>
          <Link href={`/criterios`} className="bg-blue-600 pl-3 pr-3 rounded">
            {'Volver'}
          </Link>
        </div>

        <span className="font-bold text-gray-500 text-sm">Suscripciones: {criterio.suscripciones} (84% de los usuarios) </span>

        <p>haz click aquí para ir a la discusión</p>

      </div>
    </div>
  )
}