export default {
  global: {
    componenteFormativo: 'Evaluación del cliente y seguridad del consumidor',
    descripcionCurso:
      'La evaluación de un cliente es un proceso que se debe adelantar de manera clara y concreta, ya que la captación de este depende de una serie de fases que se deben seguir a detalle, teniendo en cuenta las cualidades, características y técnicas para obtener información precisa y real que sirva como base para realizar el proceso satisfactoriamente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definiciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos y características',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Parámetros de la entrevista comercial',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Protocolos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Prospección de clientes',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Entrevistas comerciales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de información',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Métodos de recolección',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Bases de datos ',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Ciclo vital de los documentos    ',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Recepción y procesamiento ',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistema de administración de riesgos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Contextualización general  ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Alertas y operaciones       ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normas de seguridad y salud en el trabajo      ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: ' Marco normativo    ',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Aplicación de la norma en seguridad en el trabajo y el ambiente',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Da Silva, D. (2020). ¿Qué es un cliente potencial? Su importancia y cómo convertirlo en cliente real. ',
      link: 'https://www.zendesk.com.mx/blog/que-es-cliente-potencial/ ',
    },
    {
      referencia:
        'Martínez Orencio, A. (2013). La información en la organización, su gestión y auditoría. Gestiopolis. ',
      link:
        'https://www.gestiopolis.com/la-informacion-en-la-organizacion-su-gestion-y-auditoria/ ',
    },

    {
      referencia:
        'Ministerio de Ciencias. (2018). Manual de gestión ambiental. MinCiencias. ',
      link:
        'https://minciencias.gov.co/sites/default/files/ckeditor_files/A103M02-manual-gestion-ambiental%20V00.pdf ',
    },

    {
      referencia:
        'Ministerio del trabajo. (2015). Sistema de Gestión de Seguridad y Salud en el Trabajo. MinTrabajo. ',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo ',
    },
    {
      referencia:
        'Ministerio del trabajo. (2020). Implementación de los Sistemas de Gestión de Seguridad y Salud en el Trabajo al Año 2020. MinTrabajo. ',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo/implementacion-de-los-sistemas-de-gestion-de-seguridad-y-salud-en-el-trabajo-al-ano-2020 ',
    },
  ],
  glosario: [
    {
      termino: 'Administrador de riesgos',
      significado:
        'Entidad que tiene como finalidad orientar y apoyar a sus empresas afiliadas en cuanto al cumplimiento de la normatividad de seguridad y salud en el trabajo. ',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona u empresa que pasa de ser usuario o comprador para satisfacer las necesidades realizando compras frecuentes.',
    },
    {
      termino: 'Consumidor ',
      significado:
        'Persona u empresa que compra productos o servicios para proveer sus necesidades cuando lo requiera.',
    },
    {
      termino: 'Empleador',
      significado:
        'Persona u empresa que contrata por medio de cualquier modalidad a un trabajador para realizar alguna labor bajo un manual de funciones.',
    },
    {
      termino: 'SGSST ',
      significado: 'Sistema de gestión de seguridad y salud en el trabajo.',
    },
    {
      termino: 'SGA',
      significado: 'Sistema de Gestión Ambiental',
    },
    {
      termino: 'Ventas',
      significado:
        'Es una acción usual que se realiza al intercambiar un bien, servicio o producto por un dinero o algún otro tipo de valoración.',
    },
  ],
  complementario: [
    {
      tema: '1. Clientes',
      referencia:
        'Goodman, J. (2014). Atención estratégica al cliente. Pluma Digital Ediciones. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/77357?page=1',
    },
    {
      tema: '2. Técnicas de ventas',
      referencia:
        'Mañas Viniegra, L. & Fernández Frías, M. T. (2014). Cuaderno de ejercicios: técnicas de venta. Editorial CEP, S.L. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51093?page=1',
    },
    {
      tema: '3. Gestión de la información',
      referencia:
        'Ruiz Viera, E. A. (2019). La gestión documental (GD) como herramienta de desarrollo relacionadora entre la transparencia y el acceso a la información en Colombia. Dictamen Libre, 25, 95–101. ',
      tipo: 'Artículo',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=fap&AN=145360514&lang=es&site=ehost-live',
    },
    {
      tema: '3. Gestión de la información',
      referencia:
        'Martínez Orencio, A. (2013). La información en la organización, su gestión y auditoría. Gestiopolis. ',
      tipo: 'Artículo',
      link:
        'https://www.gestiopolis.com/la-informacion-en-la-organizacion-su-gestion-y-auditoria/',
    },
    {
      tema: '4. Sistema de administración de riesgos',
      referencia:
        'Tamayo Saborit, M. Y González Capote, D. (2020). La gestión de riesgos: herramienta estratégica de gestión empresarial. Editorial Universo Sur. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/131885?page=1',
    },
    {
      tema: '5.  Normas de seguridad y salud en el trabajo',
      referencia:
        'Rosal López, G. A. Perea, J. A. y Oviedo, J. A. (2020). Avances y tendencias de la seguridad y salud en el trabajo avances. Corporación Universitaria Minuto de Dios. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/198384?page=1',
    },
    {
      tema: '5.  Normas de seguridad y salud en el trabajo',
      referencia:
        'Andigraf Colombia. (2019). Gestión de seguridad y salud en el trabajo. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3zJPnD4vjUg',
    },
    {
      tema:
        '5.2 Aplicación de la norma en seguridad en el trabajo y el ambiente',
      referencia:
        'Ministerio de Ciencias. (2018). Manual de gestión ambiental. MinCiencias. ',
      tipo: 'Manual',
      link:
        'https://minciencias.gov.co/sites/default/files/ckeditor_files/A103M02-manual-gestion-ambiental%20V00.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
