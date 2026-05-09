'use client';

import { Criterio2 } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";


interface Props {
  criterio: Criterio2;
}


export const CriterioGridItem = ({ criterio }: Props) => {

  // const [ displayImage, setDisplayImage ] = useState( criterio.images[0] );
  const descriptionTrunc = criterio.description?.slice(0, 200);

  return (
    // bg-linear-to-br from-red-800 via-pink-300 to-yellow-600
    <div className="p-2 rounded-md overflow-hidden fade-in border">

      <Link href={`/criterio/${criterio.slug}`}>
        {criterio.title}

        <div className="pt-2 flex flex-col">
          <div className="hover:text-blue-600">
            {descriptionTrunc}
          </div>

          { /* agregar opción de guardar y opción de suscripción */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-500 text-sm">Suscripciones: {criterio.suscripciones}</span>

            <div className={
              clsx("px-1 rounded",
                {
                  'bg-rojo': criterio.tipo == 'boicot',
                  'bg-azul': criterio.tipo == 'estructural', //* corregir
                }
              )
            }>{criterio.tipo}</div>
            <div className={
              clsx("px-1 rounded ",
                {
                  'bg-amarillo': criterio.implicado == 'paises',
                  'bg-violeta': criterio.implicado == 'empresas',
                }
              )
            }>{criterio.implicado}</div>

          </div>
        </div>

      </Link>

    </div>


  )
}

// bg-red-800
// bg-blue-600
// bg-yellow-600
// bg-indigo-700

// bg-green-700
// border-4 border-sky-500
// rounded bg-red-500 bg-green-700