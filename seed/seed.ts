

interface SeedCriterio2 {
    id: number;
    title: string;
    slug: string;
    section: string;
    description: string;
    implicado: string;
    tipo: string;
    ratio: number;
    suscrito: boolean;
    suscripciones: number;
    variables: {
        [key: string]: { // variable
            description: string;
            section: string;
            formula?: string;
            options: {
                [key: string]: { // options
                    score: number;
                    description: string;
                }
            }
        }
    }
}

interface SeedMarca2 {
    id: number;
    name: string;
    slug: string;
    category: string;
    etapas: {
        pais: string;
        puntos: number;
        participacion: number;
    }[];
    puntuacion: {
        criterios: {
            [key: string]: {
                puntos: number;
                porcentaje: number;
            }
        },
        sections: {
            [key: string]: {
                puntos: number;
                porcentaje: number;
            }
        },
    },
    variables: {
        variable: string;
        seccion: string;
        criterioNombre: string;
        valor: any,
        puntos: number,
        fuente: string,
    }[];
}


export interface SeedPais {
    nombre: string;
    puntuacion: {
        criterios: {
            [key: string]: {
                puntos: number;
                porcentaje: number;
            }
        },
        sections: {
            [key: string]: {
                puntos: number;
                porcentaje: number;
            }
        },
    },
    variables: {
        variable: string;
        seccion: string;
        criterioNombre: string;
        valor: any;
        puntos: number;
        fuente: string;
    }[]
}

interface SeedFAQ {
    id: number;
    pregunta: string;
    respuesta: string;
}

interface seedData {
    criterios2: SeedCriterio2[],
    marcas2: SeedMarca2[],
    paises: SeedPais[],
    faqs: SeedFAQ[],
}

export const initialData: seedData = {
    criterios2: [
        //* criterios de empresas
        {
            id: 101,
            title: 'contra la explotación infantil',
            slug: 'contra_la_explotacion_infantil',
            section: 'responsabilidad_laboral',
            description: 'este criterio clasifica a las empresas según el grado de explotación infantil en el que estén involucradas',
            implicado: 'empresas',
            tipo: 'boicot',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: {
                grado_de_explotación_infantil: {
                    description: 'este criterio determina el grado de explotación infantil basado en la naturaleza de la actividad a la que son sometidos',
                    section: 'responsabilidad_laboral',
                    options: {
                        trabajo_infantil_permitido: { score: 0, description: '' },
                        trabajo_infantil_problemático: { score: -30, description: 'trabajo por muchas horas lo que interfiere con los estudios del niño, vulnera sus derechos fundamentales y afecta el desarrollo psicofisico' },
                        esclavitud: { score: -100, description: 'Incluye la venta y trata de niños, la servidumbre por deudas y el trabajo forzoso' },
                        explotación_sexual: { score: -100, description: 'Prostitución infantil y producción de material pornográfico' },
                        reclutamiento_para_actividades_criminales: { score: -100, description: 'Uso de menores para el tráfico de drogas o conflictos armados (niños soldado)' },
                        trabajos_peligrosos: { score: -100, description: 'se expone a los niños a diversos peligros (minería, sustancias tóxicas, maquinaria pesada)' },
                    }
                },
            },
        },
        {
            id: 102,
            title: 'contra el maltrato animal',
            slug: 'contra_el_maltrato_animal',
            section: 'responsabilidad_con_animales',
            description: 'este criterio puntúa a las marcas según el maltrato ejercido contra los animales en cualquiera de las fases de testeo y/o elaboración',
            implicado: 'empresas',
            tipo: 'boicot',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: {
                severidad_de_experimentos_en_animales: {
                    description: 'La severidad se determina por la intensidad, duracion, frecuencia del procedimiento, el sufrimiento acumulativo y el tipo de especie.',
                    section: 'responsabilidad_con_animales',
                    options: {
                        subumbral: { score: 0, description: 'Procedimientos que causan menos dolor o sufrimiento que una inyección de aguja, con un impacto mínimo o nulo en el bienestar del animal' },
                        leve: { score: -3, description: 'Procedimientos que causan un dolor o sufrimiento leve o a corto plazo, y que no afectan de forma significativa el bienestar o el estado general del animal' },
                        moderado: { score: -10, description: 'Procedimientos que causan un dolor, sufrimiento o angustia de intensidad moderada, o que pueden afectar moderadamente el bienestar o el estado general del animal' },
                        severo: { score: -35, description: 'Procedimientos que causan un dolor, sufrimiento o angustia intensos, o que pueden afectar severamente el bienestar o el estado general del animal' },
                        terminal: { score: -50, description: ' Procedimientos que se realizan enteramente bajo anestesia general y sin que el animal recupere la consciencia' },
                    },
                },
                confinamiento_extremo_y_hacinamiento: {
                    description: 'Uso de jaulas en batería para gallinas, jaulas de gestación para cerdas y corrales masificados, limitando drásticamente el movimiento natural',
                    section: 'responsabilidad_con_animales',
                    options: {
                        verdadero: { score: -20, description: '' },
                        falso: { score: 0, description: '' }
                    },
                },

                mutilaciones_sin_anestesia: {

                    description: 'Prácticas dolorosas rutinarias como el corte de picos, cola, orejas o castración, realizadas sin alivio del dolor para prevenir lesiones por frustración',
                    section: 'responsabilidad_con_animales',
                    options: {
                        verdadero: { score: -20, description: '' },
                        falso: { score: 0, description: '' }
                    },
                },
                sobreexplotación_fisiologica: {
                    description: 'Cría selectiva y uso de hormonas/fármacos para un crecimiento antinatural y rápido, causando fallos orgánicos, cojeras y problemas óseos',
                    section: 'responsabilidad_con_animales',
                    options: {
                        verdadero: { score: -20, description: '' },
                        falso: { score: 0, description: '' }
                    },
                },
                negligencia_sistemica_en_los_cuidados: {
                    description: 'Falta de atención veterinaria individual, iluminación artificial continua y privación de agua/alimento en transportes',
                    section: 'responsabilidad_con_animales',
                    options: {
                        verdadero: { score: -20, description: '' },
                        falso: { score: 0, description: '' }
                    },
                },
                maltrato_fisico_directo: {
                    description: 'Falta de atención veterinaria individual, iluminación artificial continua y privación de agua/alimento en transportes',
                    section: 'responsabilidad_con_animales',
                    options: {
                        verdadero: { score: -20, description: '' },
                        falso: { score: 0, description: '' }
                    },
                },
            },
        },
        {
            id: 103,
            title: 'contra las guerras',
            slug: 'contra_las_guerras',
            section: 'responsabilidad_belica',
            description: 'este criterio indica si una empresa o marca o país participa de forma directa o en distintos niveles indirectamente en crimenes de guerra',
            implicado: 'empresas',
            tipo: 'boicot',
            ratio: 1,
            suscripciones: 1234567,
            suscrito: true,
            variables: {
                responsabilidad_belica_empresarial: {
                    description: 'calcula el nivel de responsabilidad de la marca en crimenes de guerra ligados al genocidio de poblaciones',
                    section: 'responsabilidad_belica',
                    options: {
                        complicidad_directa: { score: -100, description: 'Cuando la empresa provee suministros, tecnología, armas o servicios esenciales con conocimiento de que serán utilizados para cometer genocidio, crímenes de lesa humanidad o de guerra' },
                        complicidad_indirecta: { score: -80, description: 'La empresa se beneficia económica o logísticamente del contexto del genocidio, facilitando la operatividad de los perpetradores' },
                        Responsabilidad_por_Debida_Diligencia: { score: -60, description: 'La falta de implementación de medidas para identificar, prevenir y mitigar riesgos de derechos humanos en la cadena de suministro, lo que puede resultar en responsabilidad por negligencia' }
                    }
                }
            }
        },
        {
            id: 104,
            title: 'contra la explotación laboral',
            slug: 'contra_la_explotacion_laboral',
            section: 'responsabilidad_laboral',
            description: 'analiza variables relacionadas a la explotación de los trabajadores',
            implicado: 'empresas',
            tipo: 'boicot',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: {
                presencia_de_trabajo_forzoso: {
                    description: 'se constató que la empresa tiene trabajadores en condiciones de trabajo forzoso(esclavitud)',
                    section: 'responsabilidad_laboral',
                    options: {
                        verdadero: { score: -100, description: '' },
                        falso: { score: 0, description: '' }
                    }
                },
                condiciones_insalubres_e_inseguras: {
                    description: 'trabajar en lugares peligrosos sin equipo de protección, poninedo en riesgo la integridad física o la vida',
                    section: 'responsabilidad_laboral',
                    options: {
                        verdadero: { score: -60, description: '' },
                        falso: { score: 0, description: '' }
                    }
                },
                jornadas_excesivas_y_falta_de_descansos: {
                    description: 'imponer horarios de trabajo extremos sin dias de descanso, vacaciones o tiempo para comer',
                    section: 'responsabilidad_laboral',
                    options: {
                        verdadero: { score: -40, description: '' },
                        falso: { score: 0, description: '' }
                    }
                },
                salarios_injustos_o_impagos: {
                    description: 'pagar sumas irrisorias, retener el sueldo(total o parcialmente) o el cobro forzoso de deudas por pasajes, vivienda o comida, creando una dependencia impagable',
                    section: 'responsabilidad_laboral',
                    options: {
                        verdadero: { score: -40, description: '' },
                        falso: { score: 0, description: '' }
                    }
                },
                aislamiento_y_violencia: {
                    description: 'retención del trabajador en el lugar de trabajo, violencia física, psicologica o sexual',
                    section: 'responsabilidad_laboral',
                    options: {
                        verdadero: { score: -70, description: '' },
                        falso: { score: 0, description: '' }
                    }
                },
            }
        },
        {
            id: 105,
            title: 'manejo de datos',
            slug: 'manejo_de_datos',
            section: 'responsabilidad_en_el_manejo_de_datos',
            description: 'Controla la responsabilidad de las redes sociales y otros sitios/aplicaciones en el manejo de los datos de los usuarios',
            implicado: 'empresas',
            tipo: 'boicot',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: {
                Falta_de_Proporcionalidad_y_Necesidad: {
                    description: 'Recopilar datos innecesarios, no pertinentes o excesivos para la finalidad declarada',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: {
                        verdadero: { score: -15, description: '' },
                        falso: { score: 0, description: '' },
                    }
                },
                Ausencia_de_Consentimiento: {
                    description: 'Tratar datos personales sin obtener el consentimiento claro del titular o sin una base legal válida',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: {
                        verdadero: { score: -25, description: '' },
                        falso: { score: 0, description: '' },
                    }
                },
                Deficiencias_de_Seguridad: {
                    description: 'Falta de políticas internas, cifrado o auditorías que resultan en fugas, hackeos o pérdida de información',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: {
                        verdadero: { score: -25, description: '' },
                        falso: { score: 0, description: '' },
                    }
                },
                Uso_Opaco_y_Falta_de_Transparencia: {
                    description: 'No informar claramente qué datos se rastrean o cómo se utilizarán, incluyendo la venta no autorizada',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: {
                        verdadero: { score: -20, description: '' },
                        falso: { score: 0, description: '' },
                    }
                },
                Incumplimiento_Normativo: {
                    description: 'No realizar evaluaciones de impacto (EIPD) ni cumplir con normativas de protección de datos, como mantener datos desactualizados o no eliminarlos',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: {
                        verdadero: { score: -15, description: '' },
                        falso: { score: 0, description: '' },
                    } // https://www.gub.uy/unidad-reguladora-control-datos-personales/comunicacion/publicaciones/guia-proteccion-datos-personales-para-empresas-especial-micro-pequenas-0 
                },
            }
        },
        {
            id: 108,
            title: 'meritocracia',
            slug: 'meritocracia',
            section: 'economia',
            description: 'este criterio busca hacercar la realidad a algo mas parecido a una meritocracia. no hay mérito que justifique concentrar más de 10 millones de euros',
            implicado: 'empresas',
            tipo: 'estructural',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: {
                concentracion_de_la_riqueza: {
                    description: 'esta variable mide cuanta riqueza concentran los dueños de las empresas, siendo el máximo tolerable 10 millones de euros',
                    section: 'economia',
                    formula: 'rangos',
                    options: {
                        // una formula en la que se suman puntos si se tiene menos que 10M
                    },
                }
            }
        },
        {
            id: 109,
            title: 'mecanismo FPRE', // mecanismo RFP
            slug: 'mecanismo_FPRE',
            section: 'economia',
            description: 'Este criterio es un mecanismo de financiamiento de proyectos, las empresas suscritas se someten a reglas económicas las cuales determinan cuánto dinero de sus ganancias tienen que aportar a los proyectos.',
            implicado: 'empresas',
            tipo: 'estructural',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: {
                concentracion_de_la_riqueza: {
                    description: '',
                    section: 'economia',
                    formula: '',
                    options: {
                        // 
                    },
                }
            }
        },
        //* criterios de paises
        {
            id: 106,
            title: 'Evasion fiscal y secreto financiero',
            slug: 'Evasion_fiscal_y_secreto_financiero',
            section: 'economia',
            description: 'Este criterio busca penalizar (restando puntos) a los paises que faciliten la evasión fiscal y el secreto financiero, se base en la asignación de puntos basados en los datos de la Tax Justice Network. La Red por Justicia Fiscal (Tax Justice Network o TJN) es una coalición internacional independiente de investigadores y activistas que lucha contra la evasión fiscal, la competencia fiscal desleal y los paraísos fiscales. Busca promover sistemas tributarios más justos y transparentes para reducir la desigualdad y combatir los flujos financieros ilícitos. La Red de Justicia Fiscal cree que nuestros sistemas tributarios y financieros son nuestras herramientas más poderosas para crear una sociedad justa que dé igual importancia a las necesidades de todos. Sin embargo, bajo la presión de los gigantes corporativos y los superricos, nuestros gobiernos han programado estos sistemas para priorizar a los más ricos sobre el resto, integrando el secreto financiero y los paraísos fiscales en el núcleo de nuestra economía global. Esto alimenta la desigualdad, fomenta la corrupción y socava la democracia. Trabajamos para reparar estas injusticias inspirando y capacitando a personas y gobiernos para que reprogramen sus sistemas tributarios y financieros.',
            implicado: 'paises',
            tipo: 'boicot',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: { //* facilitadores del abuso fiscal corporativo
                puntaje_de_guarida_fiscal: { //https://cthi.taxjustice.net/es/full-list
                    description: 'mide el margen que ofrecen las leyes y normativas de la jurisdicción para el abuso fiscal corporativo, ya sea intencionado o no',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -1, description: 'Los puntajes van del 0 (sin margen para el abuso fiscal) al 100 (margen ilimitado para el abuso fiscal) y el puntaje del criterio se calcula multiplicando el valor de este indicador por -1' },
                    }
                },
                GSW_de_abuso_fiscal: {
                    description: 'mide cuanta de la actividad financiera realizada por empresas multinacionales de todo el mundo entra o sale de la jurisdicción. Basado en datos del FMI sobre inversión extranjera directa',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -10, description: 'el valor de este indicador es el porcentaje de la actividad mundial en la jusrisdicción y el puntaje del criterio se calcula multiplicando el valor por -10' },
                    }
                },
                valor_de_IGFC: {
                    description: 'combina el puntaje de guarida fiscal y el peso a nivel global para determinar la importancia de la jurisdicción a la hora de permitir el abuso fiscal corporativo en todo el mundo. ',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -0.01, description: 'la puntuación del criterio se calcula dividiendo el valor del indicador entre -100' },
                    }
                },
                cuota_CTHI: {
                    description: 'el CTHI (índice de guaridas fiscales corporativas) mide que porcentaje de todo el abuso fiscal corporativo habilitado en todo el mundo es responsabilidad de la jurisdicción',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -10, description: 'la puntuación del criterio se calcula multiplicando el valor del indicador por -10' }, //* resolver: hacer que esto sea una calculadora, es score = value * -10
                    }
                },
                //* facilitadores del secreto financiero
                Puntaje_de_opacidad: { //https://fsi.taxjustice.net/es/full-list/#scoring_id=268
                    description: 'evalúa qué tanto permiten las leyes y regulaciones de un país el secreto financiero',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -1, description: 'Un puntaje de 100 indica opacidad total y 0 transparencia total, la puntuación del criterio se calcula multiplicando el valor de este indicador por -1' },
                    }
                },
                GSW_de_secreto_financiero: {
                    description: 'La cuota de mercado de una jurisdicción en los servicios financieros internacionales, basada en datos del Fondo Monetario Internacional (FMI)',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -10, description: 'el punaje se calcula multiplicando el valor del indicador por -10' },
                    }
                },
                valor_de_FSI: {
                    description: 'el Índice de Secreto Financiero evalúa la opacidad financiera de las jurisdicciones (países/territorios) combinando dos factores: el "puntaje de secreto" (qué tan estrictas son sus leyes) y la escala de sus actividades financieras internacionales ',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -0.1, description: 'el puntaje se calcula dividiendo el valor del indicador entre -10' },
                    }
                },
                porcenraje_de_FSI: {
                    description: 'El porcentaje de FSI (Cuota FSI) en el Índice de Secreto Financiero de la Tax Justice Network mide qué parte del secreto financiero mundial total es responsabilidad de una jurisdicción específica. Se calcula dividiendo el valor FSI de la jurisdicción por la suma total de los valores FSI de todas las jurisdicciones, determinando su nivel de opacidad financiera a nivel global',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -20, description: 'el puntaje se determina multiplicando el valor por -20' },
                    }
                },
            },
        },
        {
            id: 107,
            title: 'riesgo de LA y FT', //https://index.baselgovernance.org/ranking
            slug: 'riesgo_de_lavado_de_activos_y_financiamiento_del_terrorismo',
            section: 'economia',
            description: `este criterio puntúa a las empresas según el riesgo de lavado de activos y financiamiento del terrorismo basado en el indice Basel AML, es una clasificación (ranking) anual e independiente que mide el riesgo de lavado de activos y financiamiento del terrorismo (LA/FT) en los países.\n
                            Desarrollado por el Basel Institute on Governance, evalúa jurisdicciones basándose en 17-18 fuentes públicas para proporcionar una puntuación de riesgo global.\n
                            Objetivo: Ayudar a instituciones financieras y empresas a realizar evaluaciones de riesgo geográfico y debida diligencia.\n
                            Dominios de evaluación: Analiza la calidad del marco normativo ALA/CFT (Antilavado de Activos/Combate del Financiamiento del Terrorismo), corrupción, transparencia financiera, transparencia pública y riesgos legales/políticos.\n
                            Fuentes de datos: Utiliza información del Grupo de Acción Financiera (GAFI), Transparencia Internacional, el Banco Mundial y el Foro Económico Mundial.\n
                            No es una medición directa: No mide la cantidad real de dinero lavado, sino la vulnerabilidad del país y la ineficacia de sus sistemas de control.\n
                            Puntuación: Va del 0 (riesgo bajo) al 10 (riesgo alto).\n
                            Es considerado un mapa de riesgo esencial para los sujetos obligados en la lucha contra los delitos financieros.`,
            implicado: 'paises',
            tipo: 'boicot',
            ratio: 1,
            suscrito: true,
            suscripciones: 1234567,
            variables: {
                Indice_Basel_AML: {
                    description: 'El indice Basel AML es una clasificación (ranking) anual e independiente que mide el riesgo de lavado de activos y financiamiento del terrorismo (LA/FT) en los países',
                    section: 'economia',
                    formula: 'multiplicacion',
                    options: {
                        multiplicacion: { score: -10, description: 'el valor de esta variable va del 0 (riesgo bajo) al 10 (riesgo alto) y el puntaje del criterio se obtiene al multiplicarlo por -10' },
                    }
                },
            },
            /*
        {
            id: 10,
            title: '',
            slug: '',
            section: '',
            description: '',
            implicado: '',
            tipo: '',
            ratio: 1,
            suscrito: false,
            suscripciones: 1234567,
            variables: {
                nomvariable: {
                    description: '',
                    section: '',
                    formula: '',
                    options: '',
                }
            }
        },
        */
        },
        
    ],
    marcas2: [
        {
            id: 801,
            name: 'Meta', // datos y genocidio¿ // agregar atributos: los necesarios, su valor y sus fuentes
            slug: 'Meta',
            category: 'Software',
            etapas: [
                { pais: 'USA', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'Falta_de_Proporcionalidad_y_Necesidad',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Ausencia_de_Consentimiento',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Deficiencias_de_Seguridad',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Uso_Opaco_y_Falta_de_Transparencia',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Incumplimiento_Normativo',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 802,
            name: 'Telegram',
            slug: 'Telegram',
            category: 'Software',
            etapas: [
                { pais: 'EAU', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'Falta_de_Proporcionalidad_y_Necesidad',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'falso',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Ausencia_de_Consentimiento',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'falso',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Deficiencias_de_Seguridad',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'falso',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Uso_Opaco_y_Falta_de_Transparencia',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'falso',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Incumplimiento_Normativo',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'falso',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 803,
            name: 'Microsoft',
            slug: 'Microsoft',
            category: 'Software',
            etapas: [
                { pais: 'USA', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'Falta_de_Proporcionalidad_y_Necesidad',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Ausencia_de_Consentimiento',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Deficiencias_de_Seguridad',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Uso_Opaco_y_Falta_de_Transparencia',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'Incumplimiento_Normativo',
                    seccion: 'responsabilidad_en_el_manejo_de_datos',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'responsabilidad_belica_empresarial',
                    seccion: 'responsabilidad_belica',
                    criterioNombre: '',
                    valor: 'complicidad_directa',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 804,
            name: 'Nestlé', // explotación y genocidio
            slug: 'Nestle',
            category: 'Alimentos',
            etapas: [
                { pais: 'Suiza', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'grado_de_explotación_infantil',
                    seccion: 'responsabilidad_laboral',
                    criterioNombre: '',
                    valor: 'esclavitud',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'responsabilidad_belica_empresarial',
                    seccion: 'responsabilidad_belica',
                    criterioNombre: '',
                    valor: 'complicidad_indirecta',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 805,
            name: 'H&M', // contaminación y greenwashing
            slug: 'HyM',
            category: 'Vestimenta',
            etapas: [
                { pais: 'Suecia', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'condiciones_insalubres_e_inseguras',
                    seccion: 'responsabilidad_laboral',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'jornadas_excesivas_y_falta_de_descansos',
                    seccion: 'responsabilidad_laboral',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'salarios_injustos_o_impagos',
                    seccion: 'responsabilidad_laboral',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
                {
                    variable: 'grado_de_explotación_infantil',
                    seccion: 'responsabilidad_laboral',
                    criterioNombre: '',
                    valor: 'trabajo_infantil_problemático',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 806,
            name: 'Fairphone', // único productor que certifica 0 explotación laboral
            slug: 'Fairphone',
            category: 'Electronicos',
            etapas: [
                { pais: 'Netherlands', puntos: 0, participacion: 1 }, //desarrollo
                { pais: 'Portugal', puntos: 0, participacion: 1 }, //software
                { pais: 'RDC', puntos: 0, participacion: 3 }, //minerales
                { pais: 'China', puntos: 0, participacion: 2 }, //ensamblado
                { pais: 'Otros', puntos: 0, participacion: 3 }, //componentes electrónicos
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [],
            // Fairphone es el primer teléfono modular y ético del mundo, tiene un diseño que permite que uno mismo pueda repararlo y cambiar piezas.
            // De esta forma fomentan la reutilización de dispositivos electrónicos al mismo tiempo que investigan en formas de reciclado y reducción de residuos.
        },
        {
            id: 807,
            name: 'Apple', // esclavitud, trabajo forzoso
            slug: 'Apple',
            category: 'Electronicos',
            etapas: [
                { pais: 'South Korea', puntos: 0, participacion: 3 }, // pantallas, bateria, memoria
                { pais: 'Japon', puntos: 0, participacion: 3 }, // camara, bateria, memoria
                { pais: 'China', puntos: 0, participacion: 2 }, // bateria, ensamblaje
                { pais: 'India', puntos: 0, participacion: 1 }, // ensamblaje
                { pais: 'Taiwan', puntos: 0, participacion: 1 }, // procesadores
                { pais: 'USA', puntos: 0, participacion: 2 }, // memoria, vidrio
                { pais: 'Suiza', puntos: 0, participacion: 1 }, // sensores
                { pais: 'Italia', puntos: 0, participacion: 1 }, // sensores
                { pais: 'Chile', puntos: 0, participacion: 1 }, // materiales
                { pais: 'Argentina', puntos: 0, participacion: 1 }, // materiales
                { pais: 'Peru', puntos: 0, participacion: 1 }, // materiales
                { pais: 'Brasil', puntos: 0, participacion: 1 }, // materiales
                { pais: 'España', puntos: 0, participacion: 1 }, // materiales
                { pais: 'Tailandia', puntos: 0, participacion: 1 }, // materiales
                { pais: 'Indonesia', puntos: 0, participacion: 1 }, // materiales
                { pais: 'Malasia', puntos: 0, participacion: 1 }, // materiales
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'presencia_de_trabajo_forzoso',
                    seccion: 'responsabilidad_laboral',
                    criterioNombre: '',
                    valor: 'verdadero',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 808,
            name: 'Spotify', // modelo de negocio poco ético
            slug: 'Spotify',
            category: 'Software',
            etapas: [
                { pais: 'Suecia', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'responsabilidad_belica_empresarial',
                    seccion: 'responsabilidad_belica',
                    criterioNombre: '',
                    valor: 'complicidad_directa',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 809,
            name: 'Colgate',
            slug: 'Colgate',
            category: 'HigienePersonal',
            etapas: [
                { pais: 'Mexico', puntos: 0, participacion: 1 },
                { pais: 'Argentina', puntos: 0, participacion: 1 },
                { pais: 'USA', puntos: 0, participacion: 1 },
                { pais: 'Indonesia', puntos: 0, participacion: 1 },
                { pais: 'China', puntos: 0, participacion: 1 },
                { pais: 'Malasia', puntos: 0, participacion: 1 },
                { pais: 'Francia', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'responsabilidad_belica_empresarial',
                    seccion: 'responsabilidad_belica',
                    criterioNombre: '',
                    valor: 'complicidad_indirecta',
                    puntos: 0,
                    fuente: '',
                },
            ],
        },
        {
            id: 810,
            name: 'Coca-Cola', // podriamos tener una descripcin en la que indicamos de que manera la empresa incurre en cada caso
            slug: 'Coca_Cola',
            category: 'Alimentos',
            etapas: [
                { pais: 'USA', puntos: 0, participacion: 1 },
                { pais: 'Brasil', puntos: 0, participacion: 1 },
                { pais: 'China', puntos: 0, participacion: 1 },
                { pais: 'Vietnam', puntos: 0, participacion: 1 },
                { pais: 'Madagascar', puntos: 0, participacion: 1 },
                { pais: 'Francia', puntos: 0, participacion: 1 },
                { pais: 'Alemania', puntos: 0, participacion: 1 },
                { pais: 'Polonia', puntos: 0, participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: [
                {
                    variable: 'responsabilidad_belica_empresarial',
                    seccion: 'responsabilidad_belica',
                    criterioNombre: '',
                    valor: 'complicidad_indirecta', // construyo una planta en palestina ocupada ilegalmente
                    puntos: 0,
                    fuente: '',
                },
                // impacto ambiental y greenwashingImpacto Ambiental y Greenwashing: 
                // A pesar de sus compromisos, estudios señalan a la compañía como uno de los mayores contaminantes de plástico a nivel global. 
                // Se le acusa de realizar greenwashing al no cumplir con metas de envases reutilizables y depender de plásticos de un solo uso.
            ],
        },
        /*{
            id: 811,
            name: 'new', //
            slug: 'new',
            category: '',
            etapas: [
                { pais: '', participacion: 1 },
            ],
            puntuacion: {
                criterios: {},
                sections: {},
            },
            variables: []
        },*/
    ],
    paises: [
        {
            nombre: 'USA',
            puntuacion: {
                criterios: {},
                sections: {}
            },
            variables: [
                {
                    variable: 'derechos_humanos_fundamentales',
                    seccion: 'justicia',
                    criterioNombre: '',
                    valor: '0.65',
                    puntos: -35, //* como calculo esto¿
                    fuente: 'worldjusticeproject',
                },
                //* datos de evasion fiscal y secreto financiero
                {
                    variable: 'puntaje_de_guarida_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '45',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'GSW_de_abuso_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '13.2',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'valor_de_IGFC',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '455',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'cuota_CTHI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '1.1',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'Puntaje_de_opacidad',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '69',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'GSW_de_secreto_financiero',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '24.54',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'valor_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '2018',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'porcenraje_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '5.66',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                //* datos de riesgo de lavado de activos y financiamiento del terrorismo 
                {
                    variable: 'Indice_Basel_AML',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '4.83',
                    puntos: 0,
                    fuente: 'https://index.baselgovernance.org/ranking',
                },
            ],
        },
        {
            nombre: 'China',
            puntuacion: {
                criterios: {},
                sections: {}
            },
            variables: [
                {
                    variable: 'derechos_humanos_fundamentales',
                    seccion: 'justicia',
                    criterioNombre: '',
                    valor: '0.57',
                    puntos: -43,
                    fuente: 'worldjusticeproject',
                },
                //* datos de evasion fiscal y secreto financiero
                {
                    variable: 'puntaje_de_guarida_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '62',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'GSW_de_abuso_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '6.3',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'valor_de_IGFC',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '928',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'cuota_CTHI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '2.3',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'Puntaje_de_opacidad',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '70',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'GSW_de_secreto_financiero',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '0.61',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'valor_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '620',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'porcenraje_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '1.74',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                //* datos de riesgo de lavado de activos y financiamiento del terrorismo 
                {
                    variable: 'Indice_Basel_AML',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '7.26',
                    puntos: 0,
                    fuente: 'https://index.baselgovernance.org/ranking',
                },
            ],
        },
        {
            nombre: 'Suecia',
            puntuacion: {
                criterios: {},
                sections: {}
            },
            variables: [
                {
                    variable: 'derechos_humanos_fundamentales',
                    seccion: 'justicia',
                    criterioNombre: '',
                    valor: '0.87',
                    puntos: -13,
                    fuente: 'worldjusticeproject',
                },
                //* datos de evasion fiscal y secreto financiero
                {
                    variable: 'puntaje_de_guarida_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '57',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'GSW_de_abuso_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '1.1',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'valor_de_IGFC',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '417',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'cuota_CTHI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '1.0',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'Puntaje_de_opacidad',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '44',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'GSW_de_secreto_financiero',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '0.77',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'valor_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '173',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'porcenraje_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '0.48',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                //* datos de riesgo de lavado de activos y financiamiento del terrorismo 
                {
                    variable: 'Indice_Basel_AML',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '3.48',
                    puntos: 0,
                    fuente: 'https://index.baselgovernance.org/ranking',
                },
            ],
        },
        {
            nombre: 'Francia',
            puntuacion: {
                criterios: {},
                sections: {}
            },
            variables: [
                {
                    variable: 'derechos_humanos_fundamentales',
                    seccion: 'justicia',
                    criterioNombre: '',
                    valor: '0.73',
                    puntos: -27,
                    fuente: 'worldjusticeproject',
                },
                //* datos de evasion fiscal y secreto financiero
                {
                    variable: 'puntaje_de_guarida_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '65',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'GSW_de_abuso_fiscal',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '2.8',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'valor_de_IGFC',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '855',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'cuota_CTHI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '2.1',
                    puntos: 0,
                    fuente: 'https://cthi.taxjustice.net/es/full-list',
                },
                {
                    variable: 'Puntaje_de_opacidad',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '52',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'GSW_de_secreto_financiero',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '3.56',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'valor_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '455',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'porcenraje_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '1.28',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                //* datos de riesgo de lavado de activos y financiamiento del terrorismo 
                {
                    variable: 'Indice_Basel_AML',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '3.99',
                    puntos: 0,
                    fuente: 'https://index.baselgovernance.org/ranking',
                },
            ],
        },
        {
            nombre: 'Vietnam',
            puntuacion: {
                criterios: {},
                sections: {}
            },
            variables: [
                {
                    variable: 'derechos_humanos_fundamentales',
                    seccion: 'justicia',
                    criterioNombre: '',
                    valor: '0.47',
                    puntos: -53,
                    fuente: 'worldjusticeproject',
                }, //? en estos casos el algoritmo deberá procesar información incompleta de un país
                //* datos de evasion fiscal y secreto financiero 
                // {
                //     variable: 'puntaje_de_guarida_fiscal',
                //     seccion: 'economia',
                //     criterioNombre: '',
                //     valor: '',
                //     puntos: 0,
                //     fuente: '',
                // },
                // {
                //     variable: 'GSW_de_abuso_fiscal',
                //     seccion: 'economia',
                //     criterioNombre: '',
                //     valor: '',
                //     puntos: 0,
                //     fuente: '',
                // },
                // {
                //     variable: 'valor_de_IGFC',
                //     seccion: 'economia',
                //     criterioNombre: '',
                //     valor: '',
                //     puntos: 0,
                //     fuente: '',
                // },
                // {
                //     variable: 'cuota_CTHI',
                //     seccion: 'economia',
                //     criterioNombre: '',
                //     valor: '',
                //     puntos: 0,
                //     fuente: '',
                // },
                {
                    variable: 'Puntaje_de_opacidad',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '75',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'GSW_de_secreto_financiero',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '0.03',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'valor_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '288',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                {
                    variable: 'porcenraje_de_FSI',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '0.81',
                    puntos: 0,
                    fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268',
                },
                //* datos de riesgo de lavado de activos y financiamiento del terrorismo 
                {
                    variable: 'Indice_Basel_AML',
                    seccion: 'economia',
                    criterioNombre: '',
                    valor: '6.69',
                    puntos: 0,
                    fuente: 'https://index.baselgovernance.org/ranking',
                },
            ],
        },
    ],
    faqs: [
        {
            id: 901,
            pregunta: '¿Qué es éste sitio?',
            respuesta: 'Es un lugar donde las personas nos reunimos a negociar el modo en que producimos las cosas',
        },
        {
            id: 902,
            pregunta: '¿Cómo hacemos las negociaciones?',
            respuesta: 'Mediante la implementación de las Banderas, una bandera consta de dos partes: un objetivo el cual es lo que se busca conseguir y un conjunto de variables en las cuales se va a puntuar a los actores competentes, marcas, gobiernos, organismos, etc.',
        },
        /*{
            id: 00,
            pregunta: '¿?',
            respuesta: '',
        },*/
    ]
}

/* 
*HACER 
*/
/*
* hacer:
* hacer un algoritmo que calcule los resultados de aplicar los criterios a las marcas
* el algoritmo se activa cuando guardamos datos del criterio recorriendo empresas y evaluando
* o al realizar cambios en la empresa, recorriendo criterios y evaluando
* mantener en el estado los resultados y mostrarlos en pantalla
* ordenar los resultados por puntuación

* agregar la proyeccion de la empresa

* agregar un criterio que puntue a la empresa en función de su sindicato y de las leyes respetadas

* selección de variables
* declaración de las reglas

* selección de promesas

* una promesa selecciona condiciones asignandoles un valor de inicio/actual y un valor a cumplir

* los criterios son calculadoras que puntuan a las empresas que forman parte del target del mismo

* primero vemos los datos necesarios, luego los agrupamos por su origen

* individualmente cada usuario puede elegir la importancia que le da a cada criterio

* luego de aplicar los criterios también se pueden activar otro tipo de criterios que contemplan
* si la empresa es nueva y a la misma no se le aplican determinados criterios

*/

/*
    paises: [
        {
            nombre: 'USA',
            score: {
                total: 0,
            },
            sections: {
                justicia: {
                    derechos_humanos_fundamentales: { valor: '0.65', score:-35, fuente: 'worldjusticeproject' },
                },
                economia: {
                    //* datos de evasion fiscal y secreto financiero
                    puntaje_de_guarida_fiscal: { valor: 45, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    GSW_de_abuso_fiscal: { valor: 13.2, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    valor_de_IGFC: { valor: 455, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    cuota_CTHI: { valor: 1.1, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    Puntaje_de_opacidad: { valor: 69, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    GSW_de_secreto_financiero: { valor: 24.54, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    valor_de_FSI: { valor: 2018, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    porcenraje_de_FSI: { valor: 5.66, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    //* datos de riesgo de lavado de activos y financiamiento del terrorismo
                    Indice_Basel_AML: { valor: 4.83, score: 0, fuente: 'https://index.baselgovernance.org/ranking' },
                },
            },
        },
        {
            nombre: 'China',
            score: {
                total: 0
            },
            sections: {
                justicia: {
                    derechos_humanos_fundamentales: { valor: '0.57', score:-43, fuente: 'worldjusticeproject' },
                },
                economia: {
                    //* datos de evasion fiscal y secreto financiero
                    puntaje_de_guarida_fiscal: { valor: 62, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    GSW_de_abuso_fiscal: { valor: 6.3, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    valor_de_IGFC: { valor: 928, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    cuota_CTHI: { valor: 2.3, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    Puntaje_de_opacidad: { valor: 70, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    GSW_de_secreto_financiero: { valor: 0.61, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    valor_de_FSI: { valor: 620, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    porcenraje_de_FSI: { valor: 1.74, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    //* datos de riesgo de lavado de activos y financiamiento del terrorismo
                    Indice_Basel_AML: { valor: 7.26, score: 0, fuente: 'https://index.baselgovernance.org/ranking' },
                },
            },
        },
        {
            nombre: 'Suecia',
            score: {
                total: 0
            },
            sections: {
                justicia: {
                    derechos_humanos_fundamentales: { valor: '0.87', score:-13, fuente: 'worldjusticeproject' },
                },
                economia: {
                    //* datos de evasion fiscal y secreto financiero
                    puntaje_de_guarida_fiscal: { valor: 57, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    GSW_de_abuso_fiscal: { valor: 1.1, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    valor_de_IGFC: { valor: 417, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    cuota_CTHI: { valor: 1.0, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    Puntaje_de_opacidad: { valor: 44, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    GSW_de_secreto_financiero: { valor: 0.77, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    valor_de_FSI: { valor: 173, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    porcenraje_de_FSI: { valor: 0.48, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    //* datos de riesgo de lavado de activos y financiamiento del terrorismo
                    Indice_Basel_AML: { valor: 3.48, score: 0, fuente: 'https://index.baselgovernance.org/ranking' },
                },
            },
        },
        {
            nombre: 'Francia',
            score: {
                total: 0
            },
            sections: {
                justicia: {
                    derechos_humanos_fundamentales: { valor: '0.73', score:-27, fuente: 'worldjusticeproject' },
                },
                economia: {
                    //* datos de evasion fiscal y secreto financiero
                    puntaje_de_guarida_fiscal: { valor: 65, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    GSW_de_abuso_fiscal: { valor: 2.8, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    valor_de_IGFC: { valor: 855, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    cuota_CTHI: { valor: 2.1, score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    Puntaje_de_opacidad: { valor: 52, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    GSW_de_secreto_financiero: { valor: 3.56, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    valor_de_FSI: { valor: 455, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    porcenraje_de_FSI: { valor: 1.28, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    //* datos de riesgo de lavado de activos y financiamiento del terrorismo
                    Indice_Basel_AML: { valor: 3.99, score: 0, fuente: 'https://index.baselgovernance.org/ranking' },
                },
            },
        },
        {
            nombre: 'Vietnam',
            score: {
                total: 0
            },
            sections: {
                justicia: {
                    derechos_humanos_fundamentales: { valor: '0.47', score:-53, fuente: 'worldjusticeproject' },
                },
                economia: { //? en estos casos el algoritmo deberá procesar información incompleta de un país 
                    //* datos de evasion fiscal y secreto financiero
                    //puntaje_de_guarida_fiscal: { valor: , score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    //GSW_de_abuso_fiscal: { valor: , score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    //valor_de_IGFC: { valor: , score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    //cuota_CTHI: { valor: , score: 0, fuente: 'https://cthi.taxjustice.net/es/full-list' },
                    Puntaje_de_opacidad: { valor: 75, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    GSW_de_secreto_financiero: { valor: 0.03, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    valor_de_FSI: { valor: 288, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    porcenraje_de_FSI: { valor: 0.81, score: 0, fuente: 'https://fsi.taxjustice.net/es/full-list/#scoring_id=268' },
                    //* datos de riesgo de lavado de activos y financiamiento del terrorismo
                    Indice_Basel_AML: { valor: 6.69, score: 0, fuente: 'https://index.baselgovernance.org/ranking' },
                },
            },
        },/*
    ],
*/