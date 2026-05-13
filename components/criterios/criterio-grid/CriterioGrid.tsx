'use client';

import { useCriteriosStore } from "@/store";
import { Criterio2 } from "@/interfaces";
import { CriterioGridItem } from "./CriterioGridItem";
import { useEffect } from "react";
import { RatiosPanel } from "./ratios-panel/RatiosPanel";


interface Props {
	criterios: Criterio2[];
}


export const CriterioGrid = ({ criterios }: Props) => {

	const favorites = useCriteriosStore(state => state.favorites)
	const favoritos = Object.values(favorites)

	/*let noFavs: Criterio2[] = [];
	useEffect(() => {
	  noFavs = criterios.filter(c => {
		return c.suscrito == false;
	  })
	}, [favorites])*/

	return (
		<div className="sm:flex">
			<RatiosPanel />
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
		</div>
	)
}

/*
* TAREAS ACTUALES ********************************************************************************************************************************************
* //? implementar la no tranzabilidad de un criterio, suscripción por niveles, a medida que aumenta el nivel se vuelve mas restrictivo
  definimos un conjunto de limites (puntuaciones de variables) los cuales una vez transgredidos por la marca se genera una etiqueta que así lo expresa

* //? implementar marcas ficticias

* //? redactar los criterios como argumentos

* CRITERIOS DE PAÍSES *****************************************************************************************************************************************
* 2) contra la guerra: criterio que penaliza los países por sus crímenes de guerra
* //? 3) contra la contaminación ambiental 
* 4) para mejorar la educación
* 5) para mejorar la salud pública
* 6) para mejorar la eficiencia del gasto del estado
* 7) para regular el uso de patentes
* 8) para mejorar la justicia

* CRITERIOS DE EMPRESAS **************************************************************************************************************************************
* //? paridad de género en las distintas áreas de la empresa según corresponda
* poner fin a la obsolescencia programada
* sobregiro ecológico(empresa, gobierno, usuarios) y huella ecológica por persona, este criterio tendría el objetivo de modificar los comportamientos de consumo de las personas de mayores
* 	ingresos haciendo foco en no excederse de la huella que le corresponde a cada individuo 
* medio ambiente, ver greenwalling
* criterio de paridad ( de género, étnico, etario, condición de discapacidad, orientación sexual e identidad de género )
* evitar que las empresas que no tienen empleados tengan ganancias  
* suma muchos puntos que una empresa haga algo de forma ética en países donde se permite la maldad (color verde)
* empaquetado de productos
* etiquetado de alimentos
* proyección de la empresa (promesas)
* presionar a las inmobiliarias: leyes que regulen fuertemente
* salud mental, mide el impacto de las apps
* criterio: mecanismos para que una empresa exonere o disminuya los puntos perdidos por culpa del gobierno
* criterios para los usuarios: estos criterios son condiciones que los usuarios deben cumplir como requisito para poder acceder a tal o cual empresa
* criterios que apliquen a entes no gobiernos y no empresas (en relación a la transparencia y a mecanismos de medición)

* //? hacer criterios de otro tipo: usar la plata para fundar empresas automatizadas que nos vendan los artículos a precio de costo

* hacer curso de cssgrid

* corregir estilos en tema claro y oscuro, corregir saltos de linea en criterio descripción, quitar los guiones bajos _

* //? después vamos a mostrar toda la información de la marca pero clasificando en que está suscrito uno y en que no, 
* //? además de los porcentajes. agregar también todas las variables

* CRITERIOS ****************************************************************************************************************************************
* agregar filtro selector de tipo de criterio y filtro selector de actor implicado (por ahora empresa o gobierno)

* ver los casos de las empresas como películas, futbol, manga/anime, etc. en los que queremos proponer alternativas
* ver caso de turismo, criterio sobre hoteles y demás empresas/gobiernos según corresponda

* agregar atributo que diga si los índices son reales o ficticios

criterio para que los usuarios inscriptos ganen descuentos, puede ser un sistema de puntos/méritos para atraer mas usuarios

¿agregamos un arreglo con la información de las empresas de los países que intervienen en las distintas etapas de producción del producto¿

en el algoritmo de calculo de puntos del país:
implementar un sistema que refleje la cantidad de información procesada
a la hora de mostrar un país muestro su info y le agrego las variables que me piden los criterios
aunque no tengan datos, agrego un dato de porcentaje de datos obtenidos
surgen criterios para autocompletar los datos faltantes¿

* en los criterios positivos son las empresas las que se suscriben y al avanzar en determinados objetivos van recibiendo puntos y subiendo de nivel en determinadas áreas
 
* implementar un sistema que muestre los sectores en los que más hace falta emprender de manera responsable
para calcularlos hacemos la suma de la multiplicación de la cuota de mercado de cada una de las empresas 
del sector por la cantidad de puntos negativos de la misma

tipos de criterios: 
boicot            ( castiga comportamientos maliciosos restando puntos ) rojo
restaurador       ( premia buenas acciones sumando con puntos ) verde
estructural       ( promueve cambios en las estructuras de poder ) azul
mecanismo		  ( son herramientas a las que se suscriben las empresas ) amarillo

"¿que pueden hacer las empresas para recuperar puntos perdidos por re¿" ejemplo: cada criterio gub tiene debajo un selector de opción/es de indulto/s y un selector del % de exoneración

* MARCAS ******************************************************************************************************************************************
* mostrar las fuentes de los datos en las marcas
* //? agregar marcas que aun no existen pero que están siendo financiadas por un mecanismo para producir de forma etica
* //? también se puede agregar las marcas que aun no existen pero que son promesas de un emprendedor cuando se alcance determinada cantidad de potenciales clientes
*  botón de { Me Apunto }

* VISTA DE EMPRENDEDOR *************************************************************************************************************************************
* ¿Cómo podemos mostrar las mayores oportunidades de productos en los que mas haga falta emprender¿
* R: revisando sector por sector y viendo el área roja (cuota de mercado x puntaje rojo de la empresa)
* ejemplo: industria de celulares - cantidad de usuarios iPhone * -180 + lo mismo con Samsung, etc. eso nos da la cantidad de rojo en el mercado

* FUTURO
agregar el control de selección de sistema y estrategia de puntuación (ejemplo: estrategia que multa con perdidas extra los retrocesos en puntos)

¿implementar la proyección de la empresa ¿ la proyección de la empresa es un conjunto de variables cuyo valor aún no se a logrado pero es 
algo a lo que la empresa apunta o promete en caso de que se cumplan determinadas condiciones previas

*/