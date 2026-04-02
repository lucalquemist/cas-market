
import { useMarcaStore } from "@/store"

type Cats = 'Todas' | 'Alimentos' | 'Vestimenta' | 'HigienePersonal' | 'Software' | 'Electronicos' | 'Servicios' | 'Vehiculos';

export const MarcaTopMenu = () => {

  // almacenamos la opcion seleccionada en el estado
  const catSel = useMarcaStore(state => state.categorySelected)

  const categorias: Cats[] = ['Todas', 'Alimentos', 'Vestimenta', 'HigienePersonal', 'Software', 'Electronicos', 'Servicios', 'Vehiculos'];

  const seleccionarCategoria = useMarcaStore(state => state.SelectCategory )

  const handleClick = (cat: Cats) => {
    seleccionarCategoria(cat)
  }
// acá podemos usar clases condicionales basados en la categoria seleccionada
  return (
    <div className="mt-10 mb-5">
        <div className="ml-3 mr-3 pr-3 pl-3 flex justify-start items-center truncate gap-7 overflow-x-auto">
          {categorias.map((cat) => (
            <div
              key={cat}
              onClick={() => handleClick(cat)}
              className={` cursor-pointer
                ${catSel === cat
                  ? 'border-b-4 border-indigo-600'
                  : 'pb-1'}
              `}
            >
              {cat}
            </div>
          ))}
            {/* <div onClick={() => handleClick('Todas')}><p className="border-b-4 border-indigo-600 p-2">Todas</p></div>
            <div onClick={() => handleClick('Alimentos')}><p className="hover:">Alimentos</p></div>
            <div onClick={() => handleClick('Vestimenta')}><p>Vestimenta</p></div>
            <div onClick={() => handleClick('HigienePersonal')}><p>Higiene personal</p></div>
            <div onClick={() => handleClick('Software')}><p>Software</p></div>
            <div onClick={() => handleClick('Electronicos')}><p>Electrónicos</p></div>
            <div onClick={() => handleClick('Servicios')}><p>Servicios</p></div>
            <div onClick={() => handleClick('Vehiculos')}><p>Vehiculos</p></div> */}
        </div>
    </div>
  )
}

// whitespace-nowrap text-ellipsis
// className="ml-3 mr-3 pr-3 pl-3 h-full bg-white dark:bg-black flex justify-start items-center truncate gap-3"