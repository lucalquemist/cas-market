import { Marca } from "@/interfaces";


interface Props {
  marca: Marca;
  // className?: string;
}

export const MainMarca = ({ marca }: Props) => {

    console.log('marca: ');
    console.log(marca);

    return (
        <div>
            <p>{marca.name}</p>
            <hr className="mt-3 mb-3"/>
            <p>Categoria: {marca.category}</p>
            <hr className="mt-3 mb-3"/>
            <p>{ marca.datos.responsabilidad_belica ? 'Responsabilidad belica' : 'no' }</p>
            <hr className="mt-3 mb-3"/>
        </div>
    )
}