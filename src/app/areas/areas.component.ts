import { Component } from '@angular/core';

import { LanguageService, Language, LanguageData } from 'app/core';

interface AreasData {
  title: string;
  description: string;
  areas: {
    name: string;
    image: string;
  }[];
}
const AREAS_DATA: LanguageData<AreasData> = {
  es: {
    title: 'Áreas Temáticas',
    description: 'FUNDABITAT realiza trabajos de investigación y asesoramiento en el ámbito regional, promoviendo el intercambio de experiencas de desarrollo alternativo en:',
    areas: [
      { name: 'Etnoeducación', image: '/assets/images/areas/etnoeducacion.png' },
      { name: 'Recuperación de técnicas constructivas tradicionales', image: '/assets/images/areas/recuperacion.png' },
      { name: 'Generación y evaluación de Tecnologías Alternativas y Apropiadas', image: '/assets/images/areas/generacion.png' },
      { name: 'Ensayo de materiales', image: '/assets/images/areas/ensayo.png' },
      { name: 'Saneamiento Básico ambiental', image: '/assets/images/areas/saneamiento.png' },
      { name: 'Manejo integrado de Patrimonios', image: '/assets/images/areas/manejo.png' },
      { name: 'Manifestaciones Rupestres', image: '/assets/images/areas/manifestaciones.png' },
      { name: 'Implementación de proyectos demostrativos', image: '/assets/images/areas/implementacion.png' },
      { name: 'Asistencia técnica a comunidades y organizaciones', image: '/assets/images/areas/asistencia.png' }
    ]
  },
  en: {
    title: 'Thematic Areas',
    description: 'Developing the following thematic areas',
    areas: [
      { name: 'Etno-education', image: '/assets/images/areas/etnoeducacion.png' },
      { name: 'Recuperation of traditional constructive techniques', image: '/assets/images/areas/recuperacion.png' },
      { name: 'Generation and evaluation of alternative and appropriate technologies of construction with earth', image: '/assets/images/areas/generacion.png' },
      { name: 'Test of materials', image: '/assets/images/areas/ensayo.png' },
      { name: 'Basic environmental sanitation', image: '/assets/images/areas/saneamiento.png' },
      { name: 'Integrated Management of Heritages', image: '/assets/images/areas/manejo.png' },
      { name: 'Rock Art Manifestations', image: '/assets/images/areas/manifestaciones.png' },
      { name: 'Implementation of demonstrative projects', image: '/assets/images/areas/implementacion.png' },
      { name: 'Technical assistance to communities and organizations', image: '/assets/images/areas/asistencia.png' }
    ]
  }
};

@Component({
  selector: 'fd-areas',
  templateUrl: 'areas.component.html',
  styleUrls: ['areas.component.scss']
})
export class AreasComponent {
  constructor(private langSvc: LanguageService) { }

  get data() { return this.langSvc.select(AREAS_DATA); }
}
