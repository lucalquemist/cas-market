'use client';

// import { Marca } from "@/interfaces";
import { MarcaResultados } from "@/interfaces";
// import Image from "next/image";
import Link from "next/link";

interface Props {
  // marca: Marca;
  marca: MarcaResultados;
}

export const MarcaGridItem = ({ marca }: Props) => {
  
  return (
    <div className="p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600">
      {/*flex justify-between p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600 */}
      {/*grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 */}
      
      <Link className="flex whitespace-nowrap" href={ `/marca/${ marca.name }`}>
        <h2>{marca.name}</h2>
          <div className="w-full"></div>
        <h2>Total: {marca.totalScore}</h2>
      </Link>
      {Object.entries(marca.sections).map(([section, score]) => (
        <div key={section} className="flex">
          <p >
            {section}: 
          </p>
          <div className="w-full"></div>
          <p> {Number(score)} </p>
        </div>
        
        
      ))}
      
    </div>
  )

} 

/* <span className="font-bold text-gray-500 text-sm">Suscripciones: { criterio.suscripciones }</span> */

/**
 * <div className="flex justify-between p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600">
      <Link href={ `/marca/${ marca.id }` }>
        { marca.name }
      </Link>
      <p>id: { marca.id }</p>
    </div>
 */