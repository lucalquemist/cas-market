

import { MainCriterio } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CriterioPage({ params }: Props) {
  
  const { slug } = await params;

  const criterio = initialData.criterios.find(
    criterio => criterio.slug == slug
  );

  if ( !criterio ) {
    console.log('no hay criterio');
    notFound();
  }

  return (

    <div>
      {
        <MainCriterio 
          criterio={ criterio }
          //className="block md:hidden"
        />
      }
    </div>
  );
}
