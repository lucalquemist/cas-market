'use client';

import { Criterio } from "@/interfaces";
import { useCriteriosStore } from "@/store";
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
    <div className="m-10 p-5 rounded-md overflow-hidden fade-in border">

      <p className="text-2xl">{ criterio.title }</p>

      <div className="pt-2 flex flex-col">
        <p>{ criterio.description }</p>
        <p className="mt-3">Variables: </p>
        {
          criterio.variables.map(variable => (
            <div key={variable.variable} className="p-2 m-2 rounded-md overflow-hidden fade-in border">

              {/* <div className="flex flex-row mb-1 ">
                <p className="bg-gray-800 p-2" >{variable.variable}</p>
                <p className="bg-amber-800 p-2">( {variable.description} )</p>
              </div> */}

              <p className=" p-2 rounded-xs">
                <span className="bg-gray-800 p-2 rounded-xl">{ variable.variable }</span>
                <span> </span>
                { variable.description }
              </p>
              <p className="mt-3">Opciones: </p>

              <div className="">
                {variable.options.map(option => (
                  <div key={option.value} className="ml-3 p-1">
                    {/* <p className="min-w-40 bg-gray-800 pl-2">{String(option.value)}: {option.score}</p>
                    <p className="bg-amber-800 pl-2">{option.description}</p> */}

                    <p className="bg-amber-800 pt-1 pl-1 pr-1 rounded-xs">
                      <span className="min-w-40 bg-gray-800 p-1 rounded-xl">{ String(option.value) }: { option.score }</span>
                      <span> </span>
                      { option.description }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
        <div className="mt-5 mb-2 w-full" onClick={handleClick}>
        <p 
          className="w-30 flex justify-center bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all"
        >suscribir</p>
        <span className="font-bold text-gray-500 text-sm">Suscripciones: {criterio.suscripciones}</span>
        </div>
        <p>ir a la discusión en discord</p>
        { /* 
          * agregar un botón para volver al menú anterior
          * agregar enlace a la discusión en discord
          * mas adelante: agregar opción de guardar 
          */ }


        
      </div>
      
      <div className="hidden">
      <p>tareas:</p>
      <p>los textos deben estar unidos y solo pintamos el fondo de distintocolor</p>
      <p>indicar en cada caso a que nos referimos: varibles, opciones, etc.</p>
      <p>probemos separar los textos con cuadriculas</p>
      <p>hacer una pagina de FAQS en el inicio</p>
      <p>corregir opciones de criterios: debe haber al menos una opcion que no reste puntos</p>
      </div>
      
    </div>
  )
}
