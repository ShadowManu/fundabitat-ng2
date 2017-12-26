import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header';

import { LanguageService, Language, LanguageData } from 'app/core';

interface Member {
  name: string;
  description: string;
  photo: string;
}

interface TeamData {
  team: string;
  description?: string;
  members: Member[];
}

const TEAM_DATA: LanguageData<TeamData> = new Map<Language, TeamData>([
  ['es', {
    team: 'Equipo',
    description: 'FUNDABITAT ha establecido sólidas alianzas, trabajando junto a importantes OGs, ONGs y la empresa privada del país y del exterior.',
    members: [
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
  }],
  ['en',  {
    team: 'Our team',
    members: [
      {
        name: 'Ruby De Valencia',
        description: 'Landscape Architect Specialist in Appropriate and Appropriate Technologies. Co-founder and Director of ANAR',
        photo: '/assets/images/team/ruby-de-valencia.png'
      },
      {
        name: 'José Gregorio Camacho-Uzcategui',
        description: 'Commercial Lawyer, Co-founder and Legal Adviser of FUNDABITAT',
        photo: '/assets/images/team/jose-camacho.jpg'
      },
      {
        name: 'Mira Kugelmann',
        description: 'Graduate in Entegral Education. Language Coordinator and Director of CEGAVEN',
        photo: '/assets/images/team/mira-kugelmann.png'
      },
      {
        name: 'Luis Müller Peruga',
        description: 'Graphic Designer and Visual Communicator',
        photo: '/assets/images/team/luis-muller.png'
      },
      {
        name: 'Paola Valencia',
        description: 'Plastic Artist and Visual Communicator',
        photo: '/assets/images/team/paola-valencia.png'
      },
      {
        name: 'Victor Hernández Turupial',
        description: 'Photographer with interest in Ecology and Cultural Heritage',
        photo: '/assets/images/team/victor-hernandez.png'
      }
    ]
  }]
]);

@Component({
  selector: 'fd-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private headerSvc: HeaderService,
    private langSvc: LanguageService
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle(this.data.team);
  }

  get data(): TeamData { return this.langSvc.select(TEAM_DATA); }
}
