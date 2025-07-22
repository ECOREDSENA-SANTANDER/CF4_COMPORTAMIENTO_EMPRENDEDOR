export default {
  global: {
    Name: 'Fundamentos financieros para emprender',
    Description:
      'La comprensión de los fundamentos financieros es clave para evaluar la viabilidad de un proyecto de emprendimiento. Mediante el análisis del presupuesto de costos, los estados financieros y los principales indicadores financieros, es posible proyectar ingresos y egresos, anticipar riesgos y tomar decisiones estratégicas. Estos elementos son fundamentales para determinar si una iniciativa empresarial puede ser sostenible y exitosa desde sus primeras etapas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Presupuesto de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Costos de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Costo unitario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Precio de venta',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Balance inicial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Flujo de caja o efectivo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Punto de equilibrio ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tasa Interna de Oportunidad (TIO)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Valor Actual Neto (VAN) o Valor Presente Neto (VPN)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tasa Interna de Retorno (TIR)',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Balance inicial. ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, 10 abril). Balance inicial. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=maVbxjCWgKQ',
    },
    {
      tema: 'Presupuesto de costos. ',
      referencia:
        'Presupuestos y control de costos - Praxis Framework. (s. f.).  ',
      tipo: 'Página web ',
      link:
        'https://www.praxisframework.org/es/knowledge/budgeting-and-cost-control',
    },
  ],
  glosario: [
    {
      termino: 'Balance inicial',
      significado:
        'estado financiero que muestra los activos, pasivos y patrimonio de la empresa al comenzar su operación. ',
    },
    {
      termino: 'Costo de capital',
      significado:
        'tasa que representa el costo de los recursos financieros utilizados en un proyecto, incluyendo tanto capital propio como ajeno. ',
    },
    {
      termino: 'Costo unitario',
      significado:
        'valor total que representa producir una sola unidad de producto, considerando los costos fijos y variables. ',
    },
    {
      termino: 'Costos fijos',
      significado:
        'gastos que se mantienen constantes independientemente del nivel de producción o ventas, como alquileres o salarios administrativos. ',
    },
    {
      termino: 'Costos variables',
      significado:
        'gastos que cambian en función del volumen de producción o ventas, como materias primas o comisiones. ',
    },
    {
      termino: 'Egresos',
      significado:
        'salidas de dinero correspondientes a gastos operativos, financieros o de inversión necesarios para el funcionamiento del negocio. ',
    },
    {
      termino: 'Estados financieros',
      significado:
        'documentos contables que reflejan la situación económica de una empresa en un momento determinado o proyectado. ',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'registro de los ingresos y egresos de efectivo durante un periodo, útil para evaluar la liquidez del negocio. ',
    },
    {
      termino: 'Ingresos',
      significado:
        'entradas de dinero que la empresa recibe por la venta de bienes o prestación de servicios. ',
    },
    {
      termino: 'Ponto de equilibrio',
      significado:
        'nivel mínimo de ventas o producción en el que los ingresos igualan a los costos totales, sin generar pérdidas ni utilidades. ',
    },
    {
      termino: 'Precio de venta',
      significado:
        'valor al que se ofrece un producto o servicio al cliente, calculado a partir del costo unitario más el margen de utilidad deseado. ',
    },
    {
      termino: 'Presupuesto de costos',
      significado:
        'estimación anticipada de los gastos necesarios para producir bienes o prestar servicios dentro de un proyecto empresarial. ',
    },
    {
      termino: 'Tasa Interna de Oportunidad (TIO)',
      significado:
        'rentabilidad mínima exigida por un inversionista considerando otras alternativas de inversión. ',
    },
    {
      termino: 'Tasa Interna de Retorno (TIR)',
      significado:
        'tasa de rentabilidad que iguala los ingresos y egresos futuros de un proyecto; debe ser mayor al costo de capital para que el proyecto sea viable. ',
    },
    {
      termino: 'Valor Actual Neto (VAN)',
      significado:
        'indicador que muestra el valor presente de los flujos netos de un proyecto; si es positivo, el proyecto es rentable.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asensio del Aco, E., & Vazquez,B. (2016). Empresa e Iniciativa Emprendedora.Madrid.España: Paraninfo. ',
    },
    {
      referencia:
        'Montero Moreno, C. (2014). Modelos Prácticos de Administración de Riegos. México: Ediciones Fiscales ISEF. ',
    },
    {
      referencia:
        'Puchol, L.(2012). Dirección y Gestión de Recursos Humanos. Madrid-Buenos Aires - México: Díaz de Santos. ',
    },
    {
      referencia:
        'Salazar, I.P. (2010). Guía Práctica para la identificación, formulación y evaluación de proyectos.Bogotá.Editorial Universidad del Rosario. ',
    },
    {
      referencia:
        'Veiga,J.F.C.(2015). La Gestión Financiera de la Empresa. Madrid: Esic Editorial. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor pedagógico ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello de Rosa',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
