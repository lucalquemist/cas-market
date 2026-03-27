
interface SeedInformation {
    description: string;
    name: string;
    value: string;
    section: ValidSection;
}

interface SeedCriterio {
    id: number;
    title: string;
    slug: string;
    section: string;
    description: string;
    suscrito: boolean;
    suscripciones: number;
    variables: SeedVariable[];
}

interface SeedVariable {
    variable: string;
    description: string;
    section: string;
    options: SeedOption[];
}

interface SeedOption {
    value: any;
    score: number;
    description: string;
}

interface SeedMarca {
    id: number;
    name: string;
    category: string;
    datos: SeedDatos;
    //responsabilidad_en_el_manejo_de_datos?: any;
    //responsabilidad_belica?: any;
    //responsabilidad_con_animales?: any;
    //responsabilidad_laboral?: any;
}
interface SeedDatos {
    // [key: string]: SeedDato;
    responsabilidad_en_el_manejo_de_datos?: SeedDato;
    responsabilidad_belica?: SeedDato;
    responsabilidad_con_animales?: SeedDato;
    responsabilidad_laboral?: SeedDato;
}
interface SeedDato {
    [key: string]: any;
}


interface SeedMarcaResults {
    idMarca: number;
    nameEmpresa: string;
    total: number;
    results: any;
}

interface SeedInfo { }

interface SeedFAQ {
    id: number;
    pregunta: string;
    respuesta: string;
}

type ValidSection = 'economía' | 'medio ambiente' | 'laboral' | 'bélico' | 'salud pública' | 'ubicación';


interface seedData {
    variables: SeedInformation[],
    criterios: SeedCriterio[],
    marcas: SeedMarca[],
    marcasResultados: SeedMarcaResults[],
    informacion: SeedInfo[],
    faqs: SeedFAQ[],
}


export const initialData: seedData = {
    variables: [
        {
            description: 'indica la existencia de explotación infantil',
            name: 'Explotación infantil',
            value: '',
            section: 'laboral',
        },
        {
            description: 'indica el valor del salario',
            name: 'Salario',
            value: '',
            section: 'laboral',
        },
        {
            description: 'indica el nivel de previsión laboral',
            name: 'Previsión laboral',
            value: '',
            section: 'laboral',
        },
        {
            description: 'indica el nivel de equidad de género',
            name: 'Equidad de género',
            value: '',
            section: 'laboral',
        },
        {
            description: 'lugar en el que se aplica el criterio',
            name: 'ubicación',
            value: '',
            section: 'ubicación',
        },
        {
            description: 'indica el comportamiento genocida de un país',
            name: 'genocida',
            value: '',
            section: 'bélico',
        },
        {
            description: 'indica la contaminación de CO2',
            name: 'emisión de CO2',
            value: '',
            section: 'medio ambiente',
        },
        {
            description: 'indica si existe maltrato animal',
            name: 'libres de crueldad',
            value: '',
            section: 'medio ambiente',
        },
        {
            description: 'indica la contaminación de CO2 por persona',
            name: 'emisión de CO2 per capita',
            value: '',
            section: 'medio ambiente',
        },
        {
            description: 'indica si la población sufrió explotaciones laborales en el pasado reciente',
            name: 'país explotado',
            value: '',
            section: 'economía',
        },

    ],
    criterios: [
        {
            id: 101,
            title: 'contra la explotación infantil',
            slug: 'contra_la_explotacion_infantil',
            section: 'responsabilidad_laboral',
            description: 'este criterio clasifica a las empresas según el grado de explotación infantil en el que estén involucradas',
            suscrito: true,
            suscripciones: 1234567,
            variables: [
                {
                    variable: 'grado_de_explotación_infantil',
                    description: 'este criterio determina el grado de explotación infantil basado en la naturaleza de la actividad a la que son sometidos',
                    section: 'responsabilidad_laboral',
                    options: [
                        { value: 'trabajo infantil permitido', score: 0, description: '' },
                        { value: 'trabajo infantil problemático', score: -30, description: 'trabajo por muchas horas lo que interfiere con los estudios del niño, vulnera sus derechos fundamentales y afecta el desarrollo psicofisico' },
                        { value: 'esclavitud', score: -100, description: 'Incluye la venta y trata de niños, la servidumbre por deudas y el trabajo forzoso' },
                        { value: 'explotación sexual', score: -100, description: 'Prostitución infantil y producción de material pornográfico' },
                        { value: 'reclutamiento para actividades criminales', score: -100, description: 'Uso de menores para el tráfico de drogas o conflictos armados (niños soldado)' },
                        { value: 'trabajos peligrosos(minería, sustancias tóxicas, maquinaria pesada)', score: -100, description: 'se expone a los niños a diversos peligros' },
                    ]
                },
            ],
        },
        {
            id: 102,
            title: 'contra el maltrato animal',
            slug: 'contra_el_maltrato_animal',
            section: 'responsabilidad_con_animales',
            description: 'este criterio puntúa a las marcas según el maltrato ejercido contra los animales en cualquiera de las fases de testeo y/o elaboración',
            suscrito: false,
            suscripciones: 1234567,
            variables: [
                {
                    variable: 'severidad_de_experimentos_en_animales',
                    description: 'La severidad se determina por la intensidad, duracion, frecuencia del procedimiento, el sufrimiento acumulativo y el tipo de especie.',
                    section: 'responsabilidad_con_animales',
                    options: [
                        { value: 'subumbral', score: 0, description: 'Procedimientos que causan menos dolor o sufrimiento que una inyección de aguja, con un impacto mínimo o nulo en el bienestar del animal' },
                        { value: 'leve', score: -1, description: 'Procedimientos que causan un dolor o sufrimiento leve o a corto plazo, y que no afectan de forma significativa el bienestar o el estado general del animal' },
                        { value: 'moderado', score: -5, description: 'Procedimientos que causan un dolor, sufrimiento o angustia de intensidad moderada, o que pueden afectar moderadamente el bienestar o el estado general del animal' },
                        { value: 'severo', score: -20, description: 'Procedimientos que causan un dolor, sufrimiento o angustia intensos, o que pueden afectar severamente el bienestar o el estado general del animal' },
                        { value: 'terminal', score: -50, description: ' Procedimientos que se realizan enteramente bajo anestesia general y sin que el animal recupere la consciencia' },
                    ],
                }
            ],
        },
        {
            id: 103,
            title: 'contra el genocidio',
            slug: 'contra_el_genocidio',
            section: 'responsabilidad_belica',
            description: 'este criterio indica si una empresa o marca o país participa de forma directa o en distintos niveles indirectamente en crimenes de guerra',
            suscripciones: 1234567,
            suscrito: false,
            variables: [
                {
                    variable: 'responsabilidad_belica_empresarial',
                    description: 'calcula el nivel de responsabilidad de la marca en crimenes de guerra ligados al genocidio de poblaciones',
                    section: 'responsabilidad_belica',
                    options: [
                        { value: 'complicidad directa', score: -100, description: 'Cuando la empresa provee suministros, tecnología, armas o servicios esenciales con conocimiento de que serán utilizados para cometer genocidio, crímenes de lesa humanidad o de guerra' },
                        { value: 'complicidad indirecta', score: -80, description: 'La empresa se beneficia económica o logísticamente del contexto del genocidio, facilitando la operatividad de los perpetradores' },
                        { value: 'Responsabilidad por Debida Diligencia', score: -60, description: 'La falta de implementación de medidas para identificar, prevenir y mitigar riesgos de derechos humanos en la cadena de suministro, lo que puede resultar en responsabilidad por negligencia' }
                    ]
                }
            ],
        },
        {
            id: 104,
            title: 'contra la explotación laboral',
            slug: 'contra_la_explotacion_laboral',
            section: 'responsabilidad_laboral',
            description: 'analiza variables relacionadas a la explotación de los trabajadores',
            suscrito: false,
            suscripciones: 1234567,
            variables: [
                {
                    variable: 'presencia_de_trabajo_forzoso',
                    description: 'se constató que la empresa tiene trabajadores en condiciones de trabajo forzoso(esclavitud)',
                    section: 'responsabilidad_laboral',
                    options: [
                        { value: true, score: -100, description: '' }
                    ]
                }
            ] // agregar mas variables
        },
        {
            id: 105,
            title: 'responsabilidad en el manejo de datos',
            slug: 'responsabilidad_en_el_manejo_de_datos',
            section: 'responsabilidad_en_el_manejo_de_datos',
            description: 'Controla la responsabilidad de las redes sociales y otros sitios/aplicaciones en el manejo de los datos de los usuarios',
            suscrito: false,
            suscripciones: 1234567,
            variables: [
                {
                    variable: 'Falta_de_Proporcionalidad_y_Necesidad',
                    description: 'Recopilar datos innecesarios, no pertinentes o excesivos para la finalidad declarada',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: [
                        { value: true, score: -15, description: '' },
                        { value: false, score: 0, description: '' },
                    ]
                },
                {
                    variable: 'Ausencia_de_Consentimiento',
                    description: 'Tratar datos personales sin obtener el consentimiento claro del titular o sin una base legal válida',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: [
                        { value: true, score: -25, description: '' },
                        { value: false, score: 0, description: '' },
                    ]
                },
                {
                    variable: 'Deficiencias_de_Seguridad',
                    description: 'Falta de políticas internas, cifrado o auditorías que resultan en fugas, hackeos o pérdida de información',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: [
                        { value: true, score: -25, description: '' },
                        { value: false, score: 0, description: '' },
                    ]
                },
                {
                    variable: 'Uso_Opaco_y_Falta_de_Transparencia',
                    description: 'No informar claramente qué datos se rastrean o cómo se utilizarán, incluyendo la venta no autorizada',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: [
                        { value: true, score: -20, description: '' },
                        { value: false, score: 0, description: '' },
                    ]
                },
                {
                    variable: 'Incumplimiento_Normativo',
                    description: 'No realizar evaluaciones de impacto (EIPD) ni cumplir con normativas de protección de datos, como mantener datos desactualizados o no eliminarlos',
                    section: 'responsabilidad_en_el_manejo_de_datos',
                    options: [
                        { value: true, score: -15, description: '' },
                        { value: false, score: 0, description: '' },
                    ] // https://www.gub.uy/unidad-reguladora-control-datos-personales/comunicacion/publicaciones/guia-proteccion-datos-personales-para-empresas-especial-micro-pequenas-0 
                },
            ]
        },
        // hacer un criterio ecologico, podemos agregar el atributo del greenwalling para penalizar esta conducta
        // hacer: una regla en la que el resultado sea una multiplicacion: score = value * -20

    ], // agregar la proyección de la empresa
    marcas: [
        {
            id: 801,
            name: 'Meta', // datos y genocidio¿ // agregar atributos: los necesarios, su valor y sus fuentes
            category: 'Software',
            datos: {},
        },
        {
            id: 802,
            name: 'Telegram',
            category: 'Software',
            datos: {
                responsabilidad_en_el_manejo_de_datos: {
                    Falta_de_Proporcionalidad_y_Necesidad: false,
                    Ausencia_de_Consentimiento: false,
                    Deficiencias_de_Seguridad: false,
                    Uso_Opaco_y_Falta_de_Transparencia: false,
                    Incumplimiento_Normativo: false,
                }
            },
        },
        {
            id: 803,
            name: 'Microsoft', // datos y genocidio
            category: 'Software',
            datos: {
                responsabilidad_en_el_manejo_de_datos: {
                    Falta_de_Proporcionalidad_y_Necesidad: true,
                    Ausencia_de_Consentimiento: true,
                    Deficiencias_de_Seguridad: false,
                    Uso_Opaco_y_Falta_de_Transparencia: true,
                    Incumplimiento_Normativo: true,
                },
                responsabilidad_belica: {
                    responsabilidad_belica_empresarial: 'complicidad directa',
                },
            },
        },
        {
            id: 804,
            name: 'Nestlé', // explotación y genocidio
            category: 'Alimentos',
            datos: {
                responsabilidad_laboral: {
                    grado_de_explotación_infantil: 'esclavitud',
                },
                responsabilidad_belica: {
                    responsabilidad_belica_empresarial: 'complicidad indirecta',
                },
            },
        },
        {
            id: 805,
            category: 'vestimenta',
            name: 'H&M', // explotación laboral y greenwashing
            datos: {},
        },
        {
            id: 806,
            name: 'Fairphone', // único productor que certifica 0 explotación laboral
            category: 'Electrónicos',
            datos: {},
        },
        {
            id: 807,
            name: 'Iphone', // esclavitud, trabajo forzoso
            category: 'Electrónicos',
            datos: {
                responsabilidad_laboral: {
                    presencia_de_trabajo_forzoso: true,
                },
            },
        },
        {
            id: 808,
            name: 'Spotify', // modelo de negocio poco ético
            category: 'Software',
            datos: {
                responsabilidad_belica: {
                    responsabilidad_belica_empresarial: 'complicidad directa',
                },
            },
        },
        {
            id: 809,
            name: 'Colgate', // animales y genocidio
            category: 'Higiene personal',
            datos: {

                responsabilidad_belica: {
                    responsabilidad_belica_empresarial: 'complicidad indirecta',
                },
            },
        },
        {
            id: 810,
            name: 'new', //
            category: '',
            datos: {},
        },
        // ver casos en las apps instaladas en el cel
    ],
    marcasResultados: [ // agregar la proyección de la empresa
        {
            idMarca: 803,
            nameEmpresa: 'Microsoft',
            total: -175,
            results: {
                contra_el_genocidio: [
                    { variable: 'responsabilidad_belica_empresarial', optionSelected: '', score: -100 },
                ],
                responsabilidad_en_el_manejo_de_datos: [
                    { variable: 'Falta_de_Proporcionalidad_y_Necesidad', optionSelected: 'true', score: -15 },
                    { variable: 'Ausencia_de_Consentimiento', optionSelected: 'true', score: -25 },
                    { variable: 'Deficiencias_de_Seguridad', optionSelected: 'false', score: 0 },
                    { variable: 'Uso_Opaco_y_Falta_de_Transparencia', optionSelected: 'true', score: -20 },
                    { variable: 'Incumplimiento_Normativo', optionSelected: 'true', score: -15 },
                ],
            },
        },
        {
            idMarca: 802,
            nameEmpresa: 'Telegram',
            total: 0,
            results: {},
        },
        {
            idMarca: 804,
            nameEmpresa: 'Nestlé',
            total: -180,
            results: {
                contra_la_explotacion_infantil: [
                    { variable: 'grado_de_explotación_infantil', optionSelected: 'esclavitud', score: -100 },
                ],
                contra_el_genocidio: [
                    { variable: 'responsabilidad_belica_empresarial', optionSelected: 'complicidad indirecta', score: -80 },
                ],
                contra_la_explotación_laboral: [
                    { variable: 'presencia_de_trabajo_forzoso', optionSelected: '', score: 0 },
                ],
            },
        },
        {
            idMarca: 806,
            nameEmpresa: 'Firephone',
            total: 0,
            results: {
                contra_la_explotacion_infantil: [
                    { variable: 'grado_de_explotación_infantil', optionSelected: '', score: 0 },
                ],
                contra_el_genocidio: [
                    { variable: 'responsabilidad_belica_empresarial', optionSelected: '', score: 0 },
                ],
                contra_la_explotación_laboral: [
                    { variable: 'presencia_de_trabajo_forzoso', optionSelected: '', score: 0 },
                ],
                responsabilidad_en_el_manejo_de_datos: [
                    { variable: 'Falta_de_Proporcionalidad_y_Necesidad', optionSelected: '', score: 0 },
                    { variable: 'Ausencia_de_Consentimiento', optionSelected: '', score: 0 },
                    { variable: 'Deficiencias_de_Seguridad', optionSelected: '', score: 0 },
                    { variable: 'Uso_Opaco_y_Falta_de_Transparencia', optionSelected: '', score: 0 },
                    { variable: 'Incumplimiento_Normativo', optionSelected: '', score: 0 },
                ],
            },
        },
        {
            idMarca: 807,
            nameEmpresa: 'Iphone',
            total: -100,
            results: {
                contra_la_explotacion_infantil: [
                    { variable: 'grado_de_explotación_infantil', optionSelected: '', score: 0 },
                ],
                contra_el_genocidio: [
                    { variable: 'responsabilidad_belica_empresarial', optionSelected: '', score: 0 },
                ],
                contra_la_explotación_laboral: [
                    { variable: 'presencia_de_trabajo_forzoso', optionSelected: true, score: -100 },
                ],
                responsabilidad_en_el_manejo_de_datos: [
                    { variable: 'Falta_de_Proporcionalidad_y_Necesidad', optionSelected: '', score: 0 },
                    { variable: 'Ausencia_de_Consentimiento', optionSelected: '', score: 0 },
                    { variable: 'Deficiencias_de_Seguridad', optionSelected: '', score: 0 },
                    { variable: 'Uso_Opaco_y_Falta_de_Transparencia', optionSelected: '', score: 0 },
                    { variable: 'Incumplimiento_Normativo', optionSelected: '', score: 0 },
                ],
            },
        },
        {
            idMarca: 808,
            nameEmpresa: 'Spotify',
            total: -100,
            results: {
                contra_la_explotacion_infantil: [
                    { variable: 'grado_de_explotación_infantil', optionSelected: '', score: 0 },
                ],
                contra_el_genocidio: [
                    { variable: 'responsabilidad_belica_empresarial', optionSelected: 'complicidad directa', score: -100 },
                ],
                contra_la_explotación_laboral: [
                    { variable: 'presencia_de_trabajo_forzoso', optionSelected: '', score: 0 },
                ],
                responsabilidad_en_el_manejo_de_datos: [
                    { variable: 'Falta_de_Proporcionalidad_y_Necesidad', optionSelected: '', score: 0 },
                    { variable: 'Ausencia_de_Consentimiento', optionSelected: '', score: 0 },
                    { variable: 'Deficiencias_de_Seguridad', optionSelected: '', score: 0 },
                    { variable: 'Uso_Opaco_y_Falta_de_Transparencia', optionSelected: '', score: 0 },
                    { variable: 'Incumplimiento_Normativo', optionSelected: '', score: 0 },
                ],
            },
        },
        {
            idMarca: 809,
            nameEmpresa: 'Colgate',
            total: -80,
            results: {
                contra_la_explotacion_infantil: [
                    { variable: 'grado_de_explotación_infantil', optionSelected: '', score: 0 },
                ],
                contra_el_genocidio: [
                    { variable: 'responsabilidad_belica_empresarial', optionSelected: 'complicidad indirecta', score: -80 },
                ],
                contra_la_explotación_laboral: [
                    { variable: 'presencia_de_trabajo_forzoso', optionSelected: '', score: 0 },
                ],
                responsabilidad_en_el_manejo_de_datos: [
                    { variable: 'Falta_de_Proporcionalidad_y_Necesidad', optionSelected: '', score: 0 },
                    { variable: 'Ausencia_de_Consentimiento', optionSelected: '', score: 0 },
                    { variable: 'Deficiencias_de_Seguridad', optionSelected: '', score: 0 },
                    { variable: 'Uso_Opaco_y_Falta_de_Transparencia', optionSelected: '', score: 0 },
                    { variable: 'Incumplimiento_Normativo', optionSelected: '', score: 0 },
                ],
            },
        },
        /*{
            idMarca: 810,
            nameEmpresa: 'new',
            total: 0,
            results: {
                contra_la_explotacion_infantil: [
                    { variable: 'grado_de_explotación_infantil', optionSelected: '', score: 0 },
                ],
                contra_el_genocidio: [
                    { variable: 'responsabilidad_belica_empresarial', optionSelected: '', score: 0 },
                ],
                contra_la_explotación_laboral: [
                    { variable: 'presencia_de_trabajo_forzoso', optionSelected: '', score: 0 },
                ],
                responsabilidad_en_el_manejo_de_datos: [
                    { variable: 'Falta_de_Proporcionalidad_y_Necesidad', optionSelected: '', score: 0 },
                    { variable: 'Ausencia_de_Consentimiento', optionSelected: '', score: 0 },
                    { variable: 'Deficiencias_de_Seguridad', optionSelected: '', score: 0 },
                    { variable: 'Uso_Opaco_y_Falta_de_Transparencia', optionSelected: '', score: 0 },
                    { variable: 'Incumplimiento_Normativo', optionSelected: '', score: 0 },
                ],
            },
        }, */
    ], // el tamaño de la empresa también es un agravante, un multiplicador tanto de lo bueno como de lo malo
    informacion: [ // datos aportados por distintas fuentes
        {},
        {},
        {},
    ], // agregar enlace a los datos...
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

    /**
     * hacer:
     * hacer un algoritmo que calcule los resultados de aplicar los criterios a las marcas
     * el algoritmo se activa cuando guardamos datos del criterio recorriendo empresas y evaluando
     * o al realizar cambios en la empresa, recorriendo criterios y evaluando
     * mantener en el estado los resultados y mostrarlos en pantalla
     * ordenar los resultados por puntuación
     */
}

// agregar un criterio que puntue a la empresa en función de su sindicato y de las leyes respetadas

/* Datos de los criterios */
/*
selección de variables
declaración de las reglas

selección de promesas

una promesa selecciona condiciones asignandoles un valor de inicio/actual y un valor a cumplir

los criterios son calculadoras que puntuan a las empresas que forman parte del target del mismo

primero vemos los datos necesarios, luego los agrupamos por su origen

individualmente cada usuario puede elegir la importancia que le da a cada criterio

luego de aplicar los criterios también se pueden activar otro tipo de criterios que contemplan
si la empresa es nueva y a la misma no se le aplican determinados criterios

*/


// marcas formato antiguo
/*
* //marcas formato antiguo:
marcas: [
        {
            id: 801,
            name: 'Meta', // datos y genocidio¿ // agregar atributos: los necesarios, su valor y sus fuentes
            datos: {},
        },
        {
            id: 802,
            name: 'Telegram',
            datos: [
                {
                    responsabilidad_en_el_manejo_de_datos: [
                        { Falta_de_Proporcionalidad_y_Necesidad: false },
                        { Ausencia_de_Consentimiento: false },
                        { Deficiencias_de_Seguridad: false },
                        { Uso_Opaco_y_Falta_de_Transparencia: false },
                        { Incumplimiento_Normativo: false },
                    ]
                },
            ],

        },
        {
            id: 803,
            name: 'microsoft', // datos y genocidio
            datos: [
                {
                    responsabilidad_en_el_manejo_de_datos: [
                        { Falta_de_Proporcionalidad_y_Necesidad: true },
                        { Ausencia_de_Consentimiento: true },
                        { Deficiencias_de_Seguridad: false },
                        { Uso_Opaco_y_Falta_de_Transparencia: true },
                        { Incumplimiento_Normativo: true },
                    ]
                },
                {
                    responsabilidad_belica: [
                        { responsabilidad_belica_empresarial: 'complicidad directa' },
                    ]
                },
            ],

        },
        {
            id: 804,
            name: 'Nestlé', // explotación y genocidio
            datos: [
                {
                    responsabilidad_laboral: [
                        { grado_de_explotación_infantil: 'esclavitud' }
                    ]
                },
                {
                    responsabilidad_belica: [
                        { responsabilidad_belica_empresarial: 'complicidad indirecta' },
                    ]
                },
            ],
        },
        {
            id: 805,
            name: 'H&M', // explotación laboral y greenwashing
            datos: [],
        },
        {
            id: 806,
            name: 'Firephone', // único productor que certifica 0 explotación laboral
            datos: [],
        },
        {
            id: 807,
            name: 'Iphone', // esclavitud, trabajo forzoso
            datos: [
                {
                    responsabilidad_laboral: [
                        { presencia_de_trabajo_forzoso: true },
                    ]
                },
            ],

        },
        {
            id: 808,
            name: 'Spotify', // modelo de negocio poco ético
            datos: [
                {
                    responsabilidad_belica: [
                        { responsabilidad_belica_empresarial: 'complicidad directa' },
                    ]
                },
            ],
        },
        {
            id: 809,
            name: 'Colgate', // animales y genocidio
            datos: [
                {
                    responsabilidad_belica: [
                        { responsabilidad_belica_empresarial: 'complicidad indirecta' },
                    ],
                }
            ],
        },
        {
            id: 810,
            name: 'new', //
            datos: [],
        },
        // ver casos en las apps instaladas en el cel
    ],
*/