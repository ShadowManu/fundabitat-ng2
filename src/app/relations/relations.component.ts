import { Component, OnInit } from '@angular/core';

import { LanguageService, Language, LanguageData } from 'app/core';
import { HeaderService } from '../header/header.service';

interface Item {
  name: string;
  link: string;
  image: string;
}

interface RelationsData {
  title: string;
  description: string;
  relations: {
    category: string;
    items: Item[]
  }[];
}

const NATIONAL_ITEMS: Item[] = [
  { name: 'UCV', link: 'http://www.ucv.ve/', image: '/assets/images/relations/ucv.png' },
  { name: 'UJMV', link: 'http://ujmv.edu/', image: '/assets/images/relations/ujmv.jpg' },
  { name: 'USB', link: 'http://www.usb.ve/', image: '/assets/images/relations/usb.png' },
  { name: 'FUNDACIÓN TAMAYO', link: 'http://www.fundaciontamayo.org.ve/', image: '/assets/images/relations/ft.jpg' }
];

const INTERNATIONAL_ITEMS: Item[] = [
  { name: 'OEA', link: 'http://www.oas.org/es/', image: '/assets/images/relations/oea.png' },
  { name: 'UNESCO', link: 'http://es.unesco.org/', image: '/assets/images/relations/unesco.gif' },
  { name: 'PNUD', link: 'http://www.pnud.org.ve/', image: '/assets/images/relations/pnud-vzla.png' },
  { name: 'FAO', link: 'http://www.fao.org/home/es/', image: '/assets/images/relations/fao.jpg' },
  { name: 'OTCA', link: 'http://www.otca.info/', image: '/assets/images/relations/otca.png' },
  { name: 'CRATerre/EAG', link: 'http://craterre.org/', image: '/assets/images/relations/craterre.png' }
];

const ORGANIZATION_ITEMS: Item[] = [
  { name: 'UNAMAZ', link: 'http://www.unamaz.org/site/index.php', image: '/assets/images/relations/unamaz.png' },
  { name: 'IFRAO/UNESCO', link: 'http://www.ifrao.com/ifrao/', image: '/assets/images/relations/ifrao.png' }
];

const RELATIONS_DATA: LanguageData<RelationsData> = {
  es: {
    title: 'Relaciones',
    description: 'FUNDABITAT ha establecido sólidas alianzas, trabajando junto a importantes OGs, ONGs y la empresa privada del país y del exterior.',
    relations: [
      { category: 'Nacionales', items: NATIONAL_ITEMS },
      { category: 'Internacionales', items: INTERNATIONAL_ITEMS },
      { category: 'Fundabitat es miembro de', items: ORGANIZATION_ITEMS }
    ]
  },
  en: {
    title: 'Relations',
    description: 'FUNDABITAT has stablished solid alliances, working with important GOs, NGOs and private companies of the contry and abroad.',
    relations: [
      { category: 'Nationals', items: NATIONAL_ITEMS },
      { category: 'Internationals', items: INTERNATIONAL_ITEMS },
      { category: 'Fundabitat is member of', items: ORGANIZATION_ITEMS }
    ]
  }
};

@Component({
  selector: 'fd-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['relations.component.scss']
})
export class RelationsComponent implements OnInit {

  constructor(
    private headerSvc: HeaderService,
    private langSvc: LanguageService
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle(this.data.title);
  }

  get data() { return this.langSvc.select(RELATIONS_DATA); }

}
