import { Component, OnInit } from '@angular/core';

import { LanguageService, Language, LanguageData } from 'app/core';
import { HeaderService } from '../header/header.service';

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
    description: 'FUNDABITAT performs research work and counseling at the regional level, promoting the exchange of experiences of alternative development in:',
    areas: [
      { name: 'Etno-education', image: '/assets/images/areas/etnoeducacion.png' },
      { name: 'Recovery of traditional construction techniques', image: '/assets/images/areas/recuperacion.png' },
      { name: 'Generation and evaluation of Alternative and Appropriate Technologies', image: '/assets/images/areas/generacion.png' },
      { name: 'Testing of materials', image: '/assets/images/areas/ensayo.png' },
      { name: 'Basic environmental sanitation', image: '/assets/images/areas/saneamiento.png' },
      { name: 'Integrated Mnagement of Heritages', image: '/assets/images/areas/manejo.png' },
      { name: 'Rock Manifestations', image: '/assets/images/areas/manifestaciones.png' },
      { name: 'Implementation of demonstration projects', image: '/assets/images/areas/implementacion.png' },
      { name: 'Technical assistance to communities and organizations', image: '/assets/images/areas/asistencia.png' }
    ]
  }
};

@Component({
  selector: 'fd-areas',
  templateUrl: 'areas.component.html',
  styleUrls: ['areas.component.scss']
})
export class AreasComponent implements OnInit {
  constructor(
    private headerSvc: HeaderService,
    private langSvc: LanguageService
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle(this.data.title);
  }

  get data() { return this.langSvc.select(AREAS_DATA); }
}
