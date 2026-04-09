'use client';

// import { Marca } from "@/interfaces";
import { Marca } from "@/interfaces";
// import Image from "next/image";
import Link from "next/link";

interface Props {
  // marca: Marca;
  marca: Marca;
}

export const MarcaGridItem = ({ marca }: Props) => {

  const { total, ...rest } = marca.score;

  return (
    <div className="p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600">
      {/*flex justify-between p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600 */}
      {/*grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 */}

      <Link href={`/marca/${marca.slug}`}>
        <div className="flex whitespace-nowrap">
          <h2>{marca.name}</h2>
          <div className="w-full"></div>
          <h2>Total: {marca.score['total']}</h2>
        </div>

        {Object.entries(rest).map(([section, score]) => (
          <div key={section} className="flex">
            <p>{section}:</p>
            <div className="w-full"></div>
            <p>{Number(score)}</p>
          </div>
        ))}
      </Link>

    </div>
  )

}
/* {Object.entries(marca.sections).map(([section, score]) => (
        <div key={section} className="flex">
          <p >
            {section}: 
          </p>
          <div className="w-full"></div>
          <p> {Number(score)} </p>
        </div>
      ))} */
/* <span className="font-bold text-gray-500 text-sm">Suscripciones: { criterio.suscripciones }</span> */

/**
 * <div className="flex justify-between p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600">
      <Link href={ `/marca/${ marca.id }` }>
        { marca.name }
      </Link>
      <p>id: { marca.id }</p>
    </div>
 */