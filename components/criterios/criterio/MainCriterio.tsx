'use client';

import { Criterio } from "@/interfaces";
import { useCriteriosStore } from "@/store";
import Link from "next/link";
// import Image from "next/image";

interface Props {
  criterio: Criterio;
  // className?: string;
}

export const MainCriterio = ({ criterio }: Props) => {

  const addFavorite = useCriteriosStore(state => state.addFavorite)
  const removeFavorite = useCriteriosStore(state => state.removeFavorite)
  const favorite = useCriteriosStore(
    state => !!state.favorites[criterio.id]
  )

  const handleClick = () => {
    if (favorite) {
      removeFavorite(criterio.id)
      console.log('criterio removido')
    } else {
      addFavorite(criterio)
      console.log('criterio agregado')
    }
  }

  return (
    //<div className={ className }>
    // <div className="p-3 rounded-md overflow-hidden fade-in border max-w-300">
    <div className="min-w-full p-2">

      <p className="text-2xl">{criterio.title}</p>

      <div className="flex justify-between align-middle items-center">
        <div className="mt-5 mb-2 max-w-60" onClick={handleClick}>
          <p
            className="flex justify-center bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all"
          >
            {
              favorite ? 'cancelar suscricpción' : 'suscribir'
            }
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

        <p className="mt-3">Variables: </p>
        {
          criterio.variables.map(variable => (
            <div key={variable.variable}>

              <hr className="border-t-2 border-blue-gray w-full mt-3 mb-3" />

              <p className="rounded-xs">
                <span className="min-w-40 bg-gray-800 pt-1 pl-1 pr-1 pb-1 rounded-xs">
                  {variable.variable}
                </span> 
                {variable.description}
              </p>

              <p className="pl-5 mt-3">Opciones: </p>

              <div className="pl-5">
                {variable.options?.map(option => {
                  const valueStr = String(option.value);
                  const ocultar = valueStr.startsWith('*') || valueStr.startsWith('/');

                  return (
                    <div key={option.value} className="mb-2 flex w-fit">
                      <p className="bg-amber-800 rounded-xs pt-1 pl-1 pr-1 pb-1">

                        {!ocultar && (
                          <span className="min-w-40 bg-gray-800 pt-1 pl-1 pr-1 pb-1 rounded-xs">
                            {valueStr}: {option.score}
                          </span>
                        )} {option.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        }
        <hr className="border-t-2 border-gray-500 w-full mt-5 mb-5" />

        <div className="flex justify-between align-middle items-center">
          <div className="mt-5 mb-2 max-w-60" onClick={handleClick}>
            <p
              className="flex justify-center bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all"
            >
              {
                favorite ? 'cancelar suscricpción' : 'suscribir'
              }
            </p>
          </div>
          <Link href={`/criterios`} className="bg-blue-600 pl-3 pr-3 rounded">
            {'Volver'}
          </Link>
        </div>
        <span className="font-bold text-gray-500 text-sm">Suscripciones: {criterio.suscripciones}</span>

        <p>enlace para ir a la discusión</p>

      </div>

      <div className="hidden">
        <p>tareas:</p>
        <p>probemos separar los textos con cuadriculas</p>
        <p>corregir opciones de criterios: debe haber al menos una opcion que no reste puntos</p>
      </div>

    </div>
  )
}

/**
{
          criterio.variables.map(variable => (
            <div key={variable.variable} className="">

              <hr className="border-t-2 border-blue-gray w-full mt-3 mb-3" />

  

              <p className=" rounded-xs">
                <span className="min-w-40 bg-gray-800 pt-1 pl-1 pr-1 pb-1 rounded-xs">{variable.variable}</span>
                <span> </span>
                {variable.description}
              </p>
              <p className="pl-5 mt-3">Opciones: </p>

              <div className="pl-5">
                {variable.options?.map(option => (
                  <div key={option.value} className="mb-2 flex w-fit">

                    <p className="bg-amber-800 rounded-xs pt-1 pl-1 pr-1 pb-1">
                      <span className="min-w-40 bg-gray-800 pt-1 pl-1 pr-1 pb-1 rounded-xs">{String(option.value)}: {option.score}</span>
                      <span> </span>
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
 */