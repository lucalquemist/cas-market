
import { MainCriterio } from "@/components";
import { initialData } from "@/seed/seed";
import { useCriteriosStore } from "@/store";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CriterioPage({ params }: Props) {

  const { slug } = await params;

  return (

    <div>
      {
        <MainCriterio 
          slug={ slug }
          //className="block md:hidden"
        />
      }
    </div>
  );
}
