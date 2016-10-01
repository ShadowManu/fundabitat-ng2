'use strict';

import { Component } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-areas',
  templateUrl: 'areas.component.html',
  styleUrls: ['areas.component.scss']
})
export class AreasComponent {

  // TODO put in database
  areas: any = [
    {
      name: "Etnoeducación",
      image: "/assets/images/areas/etnoeducacion.png"
    },
    {
      name: "Recuperación de técnicas constructivas tradicionales",
      image: "/assets/images/areas/recuperacion.png"
    },
    {
      name: "Generación y evaluación de Tecnologías Alternativas y Apropiadas",
      image: "/assets/images/areas/generacion.png"
    },
    {
      name: "Ensayo de materiales",
      image: "/assets/images/areas/ensayo.png"
    },
    {
      name: "Saneamiento Básico ambiental",
      image: "/assets/images/areas/saneamiento.png"
    },
    {
      name: "Manejo integrado de Patrimonios",
      image: "/assets/images/areas/manejo.png"
    },
    {
      name: "Manifestaciones Rupestres",
      image: "/assets/images/areas/manifestaciones.png"
    },
    {
      name: "Implementación de proyectos demostrativos",
      image: "/assets/images/areas/implementacion.png"
    },
    {
      name: "Asistencia técnica a comunidades y organizaciones",
      image: "/assets/images/areas/asistencia.png"
    }
  ];

  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.headerSvc.setTitle('Áreas Temáticas');
  }
}
