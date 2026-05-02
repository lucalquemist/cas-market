'use client';

import { useCriteriosStore } from "@/store";
import { Criterio2 } from "@/interfaces";
import { CriterioGridItem } from "./CriterioGridItem";


interface Props {
  criterios: Criterio2[];
}


export const CriterioGrid = ({ criterios }: Props) => {

  const favorites = useCriteriosStore(state => state.favorites)
  const favoritos = Object.values(favorites)

  return (
    <div className="ml-3 mr-3 max-w-300">

      <p className="mb-3">Criterios seleccionados:</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
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
* //? (vista de marca individual) al cancelar un criterio la nota total de las marcas se actualiza pero no las variables individuales ¿ use select ¿

* modificar los algoritmos para que muestren el porcentaje de información obtenida //?

* agregar el gestor de ratios en su propia vista //?

* en main marca: //?
* botón 0: todas las variables juntas
* botón 1: elige ordenar por criterios
* boton 2: elige ordenar por seccion
* botón 3: elige ordenar [a-z]↑ y al pusar nuevamente es [a-z]↓
* botón 4: elige ordenar por puntos ↑ y al pulsar nuevamente es ↓ 

* criterios de paises
* 
* 3) contra la contaminación ambiental 
* 4) para mejorar la educación
* 5) para mejorar la salud pública
* 6) para mejorar la eficiencia del gasto del estado
* 7) para regular el uso de patentes
* 8) para mejorar la justicia
* 9) contra la guerra: criterio que penaliza los paises por sus crimenes de guerra

* hacer criterios de otro tipo:
* ejemplo: criterio para que las empresas 
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
* criterio: mecanismos para que una empresa exonere o disminuya los puntos perdidos por culpa del gobierno


* tipos de criterios: 
*    boicot            ( castiga comportamientos maliciosos restando puntos ) rojo
*    restaurador       ( premia buenas acciones sumando con puntos ) verde
*    estructural       ( promueve cambios en las estructuras de poder ) azul

* hacer curso de tailwind
* hacer curso de cssgrid

* corregir estilos en tema claro y oscuro, corregir saltos de linea en criterio description

* sistema de puntos de pais: comparar area a area de cada pais y nos quedamos con la peor puntuación de cada area

* mostrar las fuentes en las marcas

* implementar la proyeccion de la empresa

* "¿que pueden hacer las empresas para recuperar puntos perdidos por este criterio¿"
* ejemplo: cada criterio gub tiene debajo un selector de opción/es de indulto/s y un selector del % de exoneración

* CRITERIOS
* agregar filtro selector de tipo de criterio y filtro selector de actor implicado (por ahora empresa o gobierno)

* ver los casos de las empresas como peliculas, futbol, manga/anime, etc en los que queremos proponer alternativas
* ver caso de turismo, criterio sobre hoteles y demás empresas/gobiernos según corresponda
* 
* ¿como podemos mostrar las mayores oportunidades de productos en los que mas haga falta emprender¿
* R: revisando sector por sector y viendo el area roja (cuota de mercado x puntaje rojo de la empresa)
* ejemplo: industria de celulares - cantidad de usuarios iphone * -180 + lo mismo con samsung, etc. eso nos da la cantidad de rojo en el mercado

* agreagar atributo que diga si los indices son reales o ficticios

¿agregamos un arreglo con la información de las empresas de los países que intervienen en las distintas etapas de producción del producto¿
 
en el algoritmo de calculo de puntos del pais:
agregar las variables cuya información es desconocida al resultado 
implementar un sistema que refleje la cantidad de información procesada
a la hora de mostrar un pais muestro su info y le agrego las variables que me piden los criterios
aunque no tengan datos, agrego un dato de porcentaje de datos obtenidos
surgen criterios para autocompletar los datos faltantes
* de momento correrir la info que muestran las empresas para que al menos muestren lo que ya traen

* implementar un sistema que muestre los sectores en los que más hace falta emprender de manera responzable
para calcularlos hacemos la suma de la multiplicación de la cuota de mercado de cada una de las empresas 
del sector por la cantidad de puntos negativos de la misma

* FUTURO
agregar el control de seleccion de sistema y estrategia de puntuación (ejemplo: estrategia que multa con perdidas extra los retrocesos en puntos)

al mostrar una marca se muestran por defecto los atributos de los criterios seleccionados, agregar opción de ver todos los datos

cambiar el algoritmo de paises, agregamos un criterio activado por defecto en el que se agrega la información a medida que nos suscribimos
a los criterios de paises



*/