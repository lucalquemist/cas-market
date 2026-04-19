'use client';

import { useCriteriosStore } from "@/store";
import { Criterio } from "@/interfaces";
import { CriterioGridItem } from "./CriterioGridItem";


interface Props {
  criterios: Criterio[];
}


export const CriterioGrid = ({ criterios }: Props) => {

  const favorites = useCriteriosStore(state => state.favorites)
  const favoritos = Object.values(favorites)

  return (
    <div className="ml-3 mr-3 max-w-300">
      <p className="mb-3">Criterios seleccionados:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
        {
          // aca vamos a mostrar unicamente los favoritos
          favoritos.map(criterio => (
            <CriterioGridItem
              key={criterio.title}
              criterio={criterio}
            />
          ))
        }
      </div>

      <hr className="border-t-4 border-blue-500 w-full pb-10" />
      <p className="mb-3">Todos los criterios:</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {
          criterios.map(criterio => (
            <CriterioGridItem
              key={criterio.title}
              criterio={criterio}
            />
          ))
        }
      </div>

    </div>
  )
}

/*
* implementando el país en las marcas:
* //? por ahora solamente agregamos a las marcas el objeto de países con su respectivo porcentaje de responsabilidad sobre el producto
* agregamos los criterios gub al seed (para puntuar paises) y agregamos las variables a cada pais: //? 1 de 7
* //? contra la evasión fiscal
* contra el lavado de activos //https://index.baselgovernance.org/ranking
* El Basel AML Index es un índice anual independiente desarrollado por el Basel Institute on Governance que clasifica a los países según el riesgo de lavado de activos y financiamiento del terrorismo (LA/FT). Funciona como una herramienta de evaluación de riesgos para instituciones financieras y empresas, con una puntuación del 0 al 10 (donde 10 es mayor riesgo), basada en 17 indicadores de fuentes
* 
* contra la contaminación ambiental 
* para mejorar la educación
* para mejorar la salud pública
* para mejorar la eficiencia del gasto
* para regular el uso de patentes
* 
* 
* agregamos la coleccion de paises al seed, vamos a ir agregando de a poco, el algoritmo debe reflejar esto
* hacemos el algoritmo de calculo de puntos de los paises
* hacemos algoritmo de asignar a las marcas puntos por responzabilidad de sus paises
* mostramos los puntos por pais en la vista individual de cada marca
*
* la idea es que si una empresa está situada en un país determinado entonces se le suma la puntuación del país.
* para evitar que los gobiernos hagan trampa las mediciones son de distintos tipos ya que un pais bien puede mejorar aspectos inocuos para subir notas
* 
* corregir estilos en tema claro y oscuro, corregir saltos de linea en criterio description
* 
* agregar el control de seleccion de sistema y estrategia de puntuación
* agregar control de ratio para poder editarlo
* 
* hacer criterios de otro tipo, propositivos.
* ejemplo: un criterio en el que se ajusten las reglas de juego para que haya mas cantidad de ganadores y esto se parezca mas a una meritocracia
* ejemplo2: poner fin a la obsolescencia programada
* ejemplo3: sobregiro ecológico(empresa, gobierno, usuarios)
* ejemplo4: huella ecológica por persona, este criterio tendría el objetivo de modificar los comportamientos de consumo de las personas de mayores
* ingresos haciendo foco en no excederse de la huella que le corresponde a cada individuo 
* ejemplo5: criterio de paridad ( de género, etnico, etario, condición de discapacidad, orientación sexual e identidad de género )
* un criterio que sea un mecanismo de financiación de multiples proyectos 
* un criterio para evitar que las empresas que no tienen empleados tengan ganancias  
* criterio contra el genocidio de palestinos
* criterios para los usuarios: estos criterios son condiciones que los usuarios deben cumplir como requisito para poder acceder a tal o cual empresa
* criterio: suma muchos puntos que una empresa haga algo de forma etica en paises donde se permite la maldad (color verde)
* criterio de empaquetado de productos
* criterio de etiquetado de alimentos
* criterios que apliquen a entes no gobiernos y no empresas (en relación a la transparencia y a mecanismos de medición)
* criterio medio ambiente, ver greenwalling
* criterio de proyeccion de la empresa
* ¿criterio para presionar a las inmobiliarias¿ opción: leyes que regulen fuertemente
*
* 
* tipos de criterios: 
*    boicot            ( castiga comportamientos maliciosos restando puntos ) rojo
*    restaurador       ( premia buenas acciones sumando con puntos ) verde
*    estructural       ( promueve cambios en las estructuras de poder ) azul
*
* hacer curso de tailwind
* agregar ratio a los criterios
* agreagar atributo que diga si los indices son reales o ficticios
* 
* ver como implementar los criterios de los gobiernos: lista de paises, se les aplica los criterios seleccionados y eso determina la puntuación del país
* entonces a la empresa se le suman(o restan) los puntos del país. ¿que hacemos si una empresa tiene presencia en mas de un pais¿
* en estos casos vemos la importancia de cada pais en el producto, ejemplo: materias primas de ecuador 50puntos con 1/4 de importancia
* sobre el total y produccion en grecia 60 puntos con 3/4 sobre el total, la nota sería: (50*0.25) + (60*0.75) = 12.5 + 45 = 57.5
* este primer metodo tiene en cuenta ambos paises, el segundo metodo puede ser:
* idem al anterior pero solo en criterios verdes y azules, para los criterios rojos la nota no disminuye
* estas formas de calcular se eligen, son criterios
* ¿que pasa si tenes que juntar piezas de varios paises¿ acumular restas o sumas afecta la competencia¿
* R: elegimos aplicar la puntuación del peor país implicado. en estos casos los demas gobiernos pierden incentivos de mejora¿
* R:
* 
* mostrar las fuentes en las marcas
* 
* implementar la proyeccion de la empresa
* 
* por otro lado también tenemos mecanismos para que una empresa exonere o disminuya los puntos perdidos por culpa del gobierno
* "¿que pueden hacer las empresas para recuperar puntos perdidos por este criterio¿"
* ejemplo: cada criterio gub tiene debajo un selector de opción/es de indulto/s y un selector del % de exoneración
*
* agregar filtro selector de tipo de criterio y filtro selector de actor implicado (por ahora empresa o gobierno)
* 
* ver los casos de las empresas como peliculas, futbol, manga/anime, etc en los que queremos proponer alternativas
* ver caso de turismo, criterio sobre hoteles y demás empresas/gobiernos según corresponda
*
* luego en el panel de empresas podemos poner que cantidad/porcentaje de los usuarios se suscribe a cada criterio
* ¿como podemos mostrar las mayores oportunidades de productos en los que mas haga falta emprender¿
* R: revisando sector por sector y viendo el area roja (cuota de mercado x puntaje rojo de la empresa)
* ejemplo: industria de celulares - cantidad de usuarios iphone * -180 + lo mismo con samsung, etc. eso nos da la cantidad de rojo en el mercado
*
* ¿agregamos un arreglo con la información de las empresas de los países que intervienen en las distintas etapas de producción del producto¿
* es dificil presionar a paises que son monopolios de producción de un recurso
* 
* 
* 
*/