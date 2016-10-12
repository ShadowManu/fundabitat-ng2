import { Component } from '@angular/core';
import { HeaderService } from '../header';

@Component({
  selector: 'fd-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.headerSvc.setTitle('Equipo');
  }

  members: any[] = [
    {
      name: 'Ruby De Valencia',
      description: 'Arquitecto Paisajista. Especialista en Tecnologías Apropiadas y Apropiables. Co-fundadora y Directora del ANAR',
      photo: '/assets/images/team/ruby-de-valencia.png'
    },
    {
      name: 'José Gregorio Camacho-Uzcategui',
      description: 'Abogado Mercantil, Co-fundador y Asesor legal de FUNDABITAT',
      photo: '/assets/images/team/jose-camacho.jpg'
    },
    {
      name: 'Mira Kugelmann',
      description: 'Licenciada en Educación integral. Coordinadora de Idiomas y Directora de CEGAVEN',
      photo: '/assets/images/team/mira-kugelmann.png'
    },
    {
      name: 'Luis Müller Peruga',
      description: 'Diseñador Gráfico y Comunicador Visual',
      photo: '/assets/images/team/luis-muller.png'
    },
    {
      name: 'Paola Valencia',
      description: 'Artista Plástico y Comunicadora Visual',
      photo: '/assets/images/team/paola-valencia.png'
    },
    {
      name: 'Victor Hernández Turupial',
      description: 'Fotógrafo con interés en Ecología y Patrimonio Cultural',
      photo: '/assets/images/team/victor-hernandez.png'
    }
  ]
}
