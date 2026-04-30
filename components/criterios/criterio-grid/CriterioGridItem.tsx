'use client';

import { Criterio2 } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface Props {
    criterio: Criterio2;
}


export const CriterioGridItem = ({ criterio }:Props) => {
  
  // const [ displayImage, setDisplayImage ] = useState( criterio.images[0] );
  const descriptionTrunc = criterio.description?.slice(0, 200);

  return (

    <div className="p-2 rounded-md overflow-hidden fade-in border ">

        <Link href={ `/criterio/${ criterio.slug }` }>
          { criterio.title }
        </Link>

        <div className="pt-2 flex flex-col">
          <Link className="hover:text-blue-600" href={ `/criterio/${ criterio.slug }` }>
            { descriptionTrunc }
          </Link>
          { /* agregar opción de guardar y opción de suscripción */ }
          <div className="flex justify-between">
            <span className="font-bold text-gray-500 text-sm">Suscripciones: { criterio.suscripciones }</span>
            
            <div className="px-1 bg-amber-800 rounded">{criterio.tipo}</div>
            <div className="mx-1 px-1 bg-blue-600 rounded ">{criterio.implicado}</div>
          
          </div>
        </div>
    </div>

    
  )
}

