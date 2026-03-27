'use client';

import { Criterio } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface Props {
    criterio: Criterio;
}


export const CriterioGridItem = ({ criterio }:Props) => {
  
  // const [ displayImage, setDisplayImage ] = useState( criterio.images[0] );

  return (

    <div className="p-2 rounded-md overflow-hidden fade-in border">

        <Link href={ `/criterio/${ criterio.slug }` }>
          { criterio.title }
        </Link>

        <div className="pt-2 flex flex-col">
          <Link className="hover:text-blue-600" href={ `/criterio/${ criterio.slug }` }>
            { criterio.description }
          </Link>
          { /* agregar opción de guardar y opción de suscripción */ }
          <span className="font-bold text-gray-500 text-sm">Suscripciones: { criterio.suscripciones }</span>
        </div>
    </div>

    
  )
}

{
            { /*criterio.variables[0].variable*/ }

  /*



    <div className="rounded-md overflow-hidden fade-in">
        <Link href={ `/product/${ product.slug }` }>
          <Image
              src={`/products/${ displayImage }`}
              alt={ product.title }
              className="w-full object-cover rounded"
              width={ 500 }
              height={ 500 }
              onMouseEnter={() => setDisplayImage( product.images[1] )}
              onMouseLeave={() => setDisplayImage( product.images[0] )}
          />
        </Link>
        

        <div className="p-4 flex flex-col">
          <Link className="hover:text-blue-600" href={ `/product/${ product.slug }` }>
            { product.title }
          </Link>
          <span className="font-bold">${ product.price }</span>
        </div>

    </div>
    */
}
