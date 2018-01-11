import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';
import { LanguageService, Language, LanguageData } from 'app/core';

interface AboutData {
  aboutUs: string;
  main: string;
  mission0: string;
  mission1: string;
  mission2: string;
  goals0: string;
  goals1?: string;
  goals2?: string;
  goals3: string[];
  goals4: string;
}

const ABOUT_DATA: LanguageData<AboutData> = {
  es: {
    aboutUs: 'Quienes Somos',
    main: '<b>FUNDABITAT</b> es una Asociación Civil, no lucrativa, con sede permanente en Venezuela, constituida el 20 de junio de 1990; se registra en la Oficina Subalterna del Tercer Circuito de Registro del Distrito Sucre del Estado Miranda en Baruta, el 14 de Noviembre de 1990, bajo el nº 17, Tomo 10 del Protocolo Primero.',
    mission0: 'Misión',
    mission1: 'Realizar investigaciones aplicadas, de carácter multidisciplinario relativas al hábitat y su mejor apropiación, que ayuden a la cooperación técnica y al progreso social de la región, en el marco del respeto a las diferentes culturas y en armonía con el manejo sostenible y equitativo de los recursos del medio.',
    mission2: 'Para cumplir con su Misión, <b>FUNDABITAT</b>, pequeña en su número de miembros, pero con una visión amplia e integrada del desarrollo rural, entre otros trabaja en la consecución de los siguientes objetivos.',
    goals0: 'Objetivos',
    goals1: 'El OBJETO principal de la Asociación es el desarrollo  y divulgación de investigaciones multi e interdisciplinarias, aplicadas, de carácter estrictamente científico, tecnológico y cultural, orientadas a la preservación del hábitat humano, de las Manifestaciones Rupestres, de la diversidad cultural de los diferentes colectivos; a la investigación, desarrollo y fomento de Tecnologías Apropiadas y Apropiables, para el mejoramiento de la calidad de vida de los habitantes de las comunidades de escasos recursos en las que dichas investigaciones tienen lugar, a través de metodologías participativas.',
    goals2: 'Para cumplir con este propósito, sus actividades abarcan:',
    goals3: [
      'El desarrollo y divulgación por medio de sistemas de información para grupos populares, de investigaciones-acción de carácter multidisciplinario, relativas al hábitat humano, con la finalidad de contribuir al mejoramiento cualitativo del mismo.',
      'El apoyar iniciativas de autovalimiento con base en las comunidades, con la finalidad de mitigar la pobreza.'
    ],
    goals4: 'Para ello cuenta con un equipo multidisciplinario científico y técnico asociado, rotativo de alto nivel, en convenios de colaboración con Instituciones Científicas, Técnicas, Gubernamentales y ONGs del país, y del exterior. Este OBJETO y Actividades no son limitativos, pues la Asociación  puede desarrollar cualquier acción y/o proyecto que directa o indirectamente conlleve a una mejor apropiación del medio ambiente, por parte del ser humano.'
  },
  en: {
    aboutUs: 'About us',
    main: '<b>Fundabitat</b> is constituted on November 14, 1990, as evidenced by the Protocolized Act in the Public Registry of Chacao, Miranda State, under No. 17, Volume 10, Protocol One.',
    mission0: 'Mission',
    mission1: 'Constituted for the realisation of applied researchs of multidisciplinary character relative to habitat and its best appropriation, which help the technical co-operation and the social progress of the region, with respect towards the different cultures and in harmony with the sustainable and just management of the resources of the environment.',
    mission2: 'To carry out its purpose <b>FUNDABITAT</b>, small in number of members, but with an ample and integrated vision of rural development, among others works in attainment of the following',
    goals0: 'Objectives',
    goals3: [
      'Contributes by means of formation and schooling within the frame of infrastructure development, improvement of life standard of communities, optimising its conditions of health, education, traditional manner of organisation and production, giving efficient response to the necessities felt by the different groups.',
      'Developing and implementing projects with appropriated technologies and systems of information for popular groups.',
      'As the result of its projects, supporting the formation of small enterprises in the communities, its production, negotiation and commercialisation.',
      'Working in a participate way with communities and other public and private institutions in the region.',
      'Realising the diffusion and transference of the results of investigations, projects and achieved works.',
      'Supporting auto-influenced initiatives with foundation in the communities, including activities generating income with the purpose of mitigating poverty.'
    ],
    goals4: 'For this, it has a scientific and technical associated multidisciplinary team, rotating at a high level, in collaboration agreements with Scientific, Technical, Governmental and NGO Institutions of the country, and abroad. This OBJECT and Activities are not limiting, because the Association can develop any action and / or project that directly or indirectly leads to a better appropriation of the environment by the human being.'
  }
};

@Component({
  selector: 'fd-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private headerSvc: HeaderService,
    private langSvc: LanguageService
  ) { }

  get data(): AboutData { return this.langSvc.select(ABOUT_DATA); }

  ngOnInit() {
    this.headerSvc.setTitle(this.data.aboutUs);
  }
}
