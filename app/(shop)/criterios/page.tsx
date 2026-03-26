// import { CriterioGrid, Title } from "@/components";
import { CriterioGrid } from "@/components";

import { initialData } from "@/seed/seed";


const criterios = initialData.criterios;

export default function Home() {

  {/*
    <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />
  */}

  return (
    <>

      <CriterioGrid
        criterios={criterios}
      />

    </>
  );
}