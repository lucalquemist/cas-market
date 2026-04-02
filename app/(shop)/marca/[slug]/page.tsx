

import { MainMarca } from "@/components";
import { Marca } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}
//: Marca[id]
export default async function CriterioPage({ params }: Props) {

    console.log('marcaaaaaaaa');
    const { slug } = await params;

    const marca = initialData.marcas.find(
        marca => marca.slug == slug
    );

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