'use client';

// import Image from "next/image";
import { Marca2 } from "@/interfaces";
import Link from "next/link";

interface Props {
  marca: Marca2;
}

export const MarcaGridItem = ({ marca }: Props) => {

  const { total, ...rest } = marca.puntuacion.criterios

  return (
    <div className="p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600">
      
      <Link href={`/marca/${marca.slug}`}>
        <div className="flex whitespace-nowrap">
          <h2>{marca.name}</h2>
          <div className="w-full"></div>
          <h2>Total: {total.puntos}</h2>
        </div>

        {Object.entries(rest).map(([section, stats]) => (
          <div key={section} className="flex">
            <p>{section}:</p>
            <div className="w-full"></div>
            <p>{Number(stats.puntos)}</p>
          </div>
        ))}
      </Link>

    </div>
  )

}
/*
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

  *const { total, ...rest } = marca.score;

  return (
    <div className="p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600">

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

*/

/*flex justify-between p-2 rounded-md overflow-hidden fade-in border hover:text-blue-600 */
/*grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 */