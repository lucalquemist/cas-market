

import { MainMarca } from "@/components";
import { Marca } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CriterioPage({ params }: Props) {

    console.log('marcaaaaaaaa');
    const { slug } = await params;

    const marca: Marca = initialData.marcas.find(
        marca => marca.slug == slug
    )!; // ?? esta cacarteristica permite recurrir a un valor predeterminado cuando se trata de un valor nulo o indefinido || podemos usar este operador y en caso de que no se encuentre mostramos este

    if (!marca) {
        console.log('no hay marca');
        notFound();
    }

    

    return (

        <div>
            {
                <MainMarca
                    marca={marca}
                //className="block md:hidden"
                />
            }
        </div>
    );
}