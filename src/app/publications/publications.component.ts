import { Component } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-publications',
  templateUrl: 'publications.component.html',
  styleUrls: ['publications.component.scss']
})
export class PublicationsComponent {

  // TODO put in database
  publications: any = [
    {
      title: 'El Diseño en los Petroglifos Venezolanos',
      author: 'Ruby De Valencia y Jeannine Sujo',
      description: ['Su contenido permitió:',
        '•  Presentar el primer inventario documentado fotográficamente sobre '
        + 'la totalidad de estaciones rupestres registradas a nivel nacional ' 
        + 'hasta el momento, que conforman parte del patrimonio cultural ' 
        + 'arqueológico de Venezuela.',
        '•  Sustentar importantes conclusiones en el campo de la investigación '
        + 'antropológica referentes a Venezuela: en base al estudio e '
        + 'interrelación de las características estilísticas de estas '
        + 'estaciones, se formularon los horizontes estilísticos que definen '
        + 'las diferentes zonas geográficas del país. Estos horizontes '
        + 'permitieron a su vez orientar varias hipótesis referentes a algunas'
        + 'de las rutas migratorias más antiguas de nuestro país.',
        'Edición trilingüe español, francés e inglés de la Fundación Pampero, '
        + '410 pags, Caracas, 1987.',
        'Esta publicación fue acreedora de los siguientes reconocimientos '
        + 'nacionales e internacionales: Representa a Venezuela en la '
        + 'Exposición EL LIBRO MAS BELLO DEL MUNDO 1988; Medalla de Bronce , '
        + 'Exposición Internacional del Arte del Libro, 1989, Leipzig, '
        + 'Alemania; y Reconocimiento en la IX Exposición Anual del Libro '
        + 'Ilustrado y la Fotografía Documental , 1988, Instituto Autónomo '
        + 'Biblioteca Nacional, Caracas.'],
      image: 'assets/images/publications/el-diseño.png'
    },
    {
      title: 'La Guaira Siempre',
      author: 'Victor Hernández y Yajaira González.',
      description: ['Este trabajo, es una recopilación de datos históricos, '
      + 'que a través de un excelente trabajo fotográfico sobre el Patrimonio '
      + 'Cultural , hace un sucinto recorrido por la particular historia de la '
      + 'Guaira , y evidencia las circunstancias que formaron a los guaireños '
      + 'como sociedad, desde sus más lejanas raíces, hasta la actualidad, '
      + 'resaltando que lo más importante, no son los sucesos en sí mismos, '
      + 'sino saber, como siempre lo hicieron sus pobladores a lo largo de su '
      + 'historia, sobreponerse a ellos.',
        'Edición del CONAC -Consejo Nacional de Cultura-, 106 págs, Caracas, 2003'],
      image: 'assets/images/publications/la-guaira-siempre.png'
    },
    {
      title: 'Tecnologías Apropiadas de la Amazonia en: Construcción, '
      + 'Saneamiento Básico Ambiental y Energías Alternativas. Las '
      + 'Experiencias amazónicas como base de la Red de Tecnologías Apropiadas '
      + 'de la Amazonia –RETAM (amazonia de Bolivia, Brasil, Colombia y '
      + 'Venezuela)',
      author: 'Ruby De Valencia',
      description: ['No existen soluciones universales sino Tecnologías '
      + 'Apropiadas para cada contexto económico, organizativo, cultural y '
      + 'ecológico, en el cuál el elemento fundamental para su selección es el '
      + 'impacto ambiental. Esta realidad hace necesaria la identificación del '
      + 'estado del arte de las Tecnologías Apropiadas, y de un análisis '
      + 'comparativo que propicie el intercambio de experiencias que sume '
      + 'esfuerzos sobre la materia en la región amazónica.',
        'Este trabajo argumenta a favor del enfoque integral para atender '
      + 'problemas de construcción, saneamiento básico ambiental –manejo de '
      + 'basuras, disposición de excretas, aguas servidas y energías alternas '
      + 'en áreas marginadas de la Amazonia- por medio de Tecnologías '
      + 'Apropiadas y Apropiables, empleando diversas ecotecnologías a través '
      + 'de la autogestión comunitaria del medio ambiente.',
        'TCA - Tratado de Cooperación Amazónica -, FUNDABITAT, FAO, Ministerio '
      + 'de Cooperación Técnica del Reino de los Países Bajos. 160 págs, '
      + 'Caracas, 1999'],
      image: 'assets/images/publications/tecnologias-a-y-a.png'
    },
    {
      title:'CD - Memoria Institucional TRATADO DE COOPERACIÓN AMAZÓNICA '
      + 'Publicaciones 1990-1999',
      author:'',
      description: ['Este CD-ROM contiene las publicaciones de la Secretaría '
      + 'Pro Tempore del Tratado de Cooperación Amazónica (algunas de '
      + 'FUNDABITAT) entre 1990 y 1999, años durante los cuales la Secretaría '
      + 'ha sido ejercida por Ecuador, Perú y Venezuela. Dichas publicaciones '
      + 'están dirigidas a todos los estudiosos del hecho amazónico.',
      'TCA - Tratado de Cooperación Amazónica, 1999'],
      image:'/assets/images/publications/tratado.png'
    },
    {
      title: 'CD. Base de Datos sobre Tecnologías Apropiadas de la Amazonia '
      + '–Bolivia, Brasil, Colombia y Venezuela-',
      author: '',
      description: ['A través de la Base de Datos, en esta primera fase, se '
      + 'ofrece información sobre algunas de las Tecnologías Apropiadas '
      + 'desarrolladas en la Amazonia de Bolivia, Brasil, Colombia y '
      + 'Venezuela, de Profesionales, Técnicos e Instituciones y Proyectos '
      + 'desarrollados con las mismas.',
        'Esta información está dirigida principalmente a los Grupos '
      + 'Comunitarios, Técnicos y Profesionales , aportando elementos a los '
      + 'Organismos Nacionales y Regionales que toman decisiones y elaboran '
      + 'los Programas de desarrollo local dentro del marco de las '
      + 'estrategias para la reducción de la pobreza en cada país amazónico.',
        'FUNDABITAT, FAO, TCA / SPT Venezuela–Tratado de Cooperación Amazónica '
      + '/ Secretaría Pro Tempore Venezuela. 2000'],
      image: 'assets/images/publications/bd-tecnologias.png'
    },
    {
      title: 'CD. Base de Datos. Tecnologías Apropiadas de la Amazonia en: '
      + 'Construcción, Saneamiento básico ambiental y energías alternas.',
      author: '',
      description: ['Con el objeto de sistematizar las experiencias sobre el '
      + 'estado actual de las Tecnologías Apropiadas, y sus actores de '
      + 'desarrollo en los 8 países amazónicos, FUNDABITAT estructuró una '
      + 'Base de Datos Referencial y Relacional de Tecnologías Apropiadas en '
      + 'la Amazonia, sobre Construcción, Saneamiento Básico Ambiental y '
      + 'Energías Renovables, como parte fundamental en su trabajo de '
      + 'configuración y puesta en marcha de la RETAM –Red de tecnologías '
      + 'Apropiadas de la Amazonia-.',
        'FUNDABITAT, OEA, FFPG, UNAMAZ, CAF. 2009'],
      image: 'assets/images/publications/bd-3-idiomas.png'
    },
    {
      title: 'Juego didáctico: MANIFESTACIONES RUPESTRES VENEZOLANAS',
      author: '',
      description: ['Este singular juego permitirá a los educadores, aplicar '
      + 'diversas estrategias, para enseñar y aprender con el Patrimonio '
      + 'Cultural Arqueológico. Las cartas que contiene, permiten convertir '
      + 'el juego en una experiencia educativa, en ellas encontrará '
      + 'información sobre las Manifestaciones Rupestres venezolanas y los '
      + 'estados donde se ubican.',
        'Estudiantes, educadores y público en general de todas las edades, '
      + 'podrán entrar al mundo de las Manifestaciones Rupestres, a través de '
      + 'este juego didáctico de divulgación científica, que propone fomentar '
      + 'el conocimiento, como vehículo para la protección de los sitios '
      + 'rupestres en Venezuela.',
        'Para niños desde 7 años y público en general',
        'FUNDABITAT, 2012'],
      image: '/assets/images/publications/juego-didactico-mr.jpg'
    },
    {
      title: 'Juego didáctico: VENEZUELA RUPESTRE y MUNDO RUPESTRE',
      author: '',
      description: ['A través de ruedas giratorias, este juego didáctico '
      + 'propone un recorrido temático por la Venezuela Rupestre y el Mundo '
      + 'Rupestre, muestra su unidad, su diversidad, y la forma de comprender '
      + 'el mundo, a través de las Manifestaciones Rupestres.',
        'Para niños desde 8 años en adelante y público en general',
        'FUNDABITAT, 2012'],
      image: 'assets/images/publications/rueda-venezuela.png'
    },
    {
      title: 'Juego didáctico MEMORIA: FIGURAS RUPESTRES DEL Noroeste costero '
      + 'del estado Vargas',
      author: '',
      description: ['Como todo juego de memoria, consiste en encontrar la '
      + 'pareja idéntica, de cada una de las Figuras de los sitios rupestres '
      + 'del Noroeste costero del estado Vargas en Venezuela, que se '
      + 'encuentran escondidas abajo en las diferentes cartas.',
        'Para público de cualquier edad.',
        'FUNDABITAT, 2012'],
      image: '/assets/images/publications/juego-didactico-memoria.jpg'
    },
  ]

  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.headerSvc.setTitle('Publicaciones');
  }
}
