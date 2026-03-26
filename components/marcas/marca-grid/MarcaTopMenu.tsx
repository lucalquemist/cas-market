

export const MarcaTopMenu = () => {
  return (
    <div className="mt-10 mb-5">
        <div className="ml-3 mr-3 pr-3 pl-3 flex justify-start items-center truncate gap-7">
            <p className="border-b-4 border-indigo-600 p-2">Todas</p>
            <p>Software</p>
            <p>Vehiculos</p>
            <p>Alimentos</p>
            <p>Electrónica</p>
            <p>Higiene personal</p>
            <p>Servicios</p>
        </div>
    </div>
  )
}
/**
 * * este menu debe mostrar las opciones de marcas, todas, a, b, c, etc.
 * * en cada caso deberemos filtrar las marcas correspondientes a la opcion seleccionada
 * * implementar la tirolesa del curso
 * * 
 * * 
 * * 
 * * los criterios van a tener ramificaciones
 */

// whitespace-nowrap text-ellipsis
// className="ml-3 mr-3 pr-3 pl-3 h-full bg-white dark:bg-black flex justify-start items-center truncate gap-3"