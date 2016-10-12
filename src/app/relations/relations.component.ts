import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['relations.component.scss']
})
export class RelationsComponent implements OnInit {

  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.headerSvc.setTitle('Relaciones');
  }

  relations: any[] = [
    {
      title: 'Nacionales',
      members: [
        { name: 'UCV', link: 'http://www.ucv.ve/', image: "/assets/images/relations/ucv.png" },
        { name: 'UJMV', link: 'http://ujmv.edu/', image: "/assets/images/relations/ujmv.jpg" },
        { name: 'USB', link: 'http://www.usb.ve/', image: "/assets/images/relations/usb.png" },
        { name: 'FUNDACIÓN TAMAYO', link: "http://www.fundaciontamayo.org.ve/", image: "/assets/images/relations/ft.jpg" },
        { name: 'INGEOLAN', link: "http://www.ingeolan.com/", image: "/assets/images/relations/ingeolan.png" },
      ]
    },
    {
      title: 'Internacionales',
      members: [
        { name: 'OEA', link: 'http://www.oas.org/es/', image: "/assets/images/relations/oea.png" },
        { name: 'UNESCO', link: 'http://es.unesco.org/', image: "/assets/images/relations/unesco.gif" },
        { name: 'PNUD', link: 'http://www.pnud.org.ve/', image: "/assets/images/relations/pnud-vzla.png" },
        { name: 'FAO', link: 'http://www.fao.org/home/es/', image: "/assets/images/relations/fao.jpg" },
        { name: 'OTCA', link: 'http://www.otca.info/', image: "/assets/images/relations/otca.png" },
        { name: 'CRATerre/EAG', link: 'http://craterre.org/', image: "/assets/images/relations/craterre.png" }
      ]
    },
    {
      title: 'Fundabitat es miembro de',
      members: [
        { name: 'UNAMAZ', link: 'http://www.unamaz.org/site/index.php', image: "/assets/images/relations/unamaz.png" },
        { name: 'IFRAO/UNESCO', link: 'http://www.ifrao.com/ifrao/', image: "/assets/images/relations/ifrao.png" }
      ]
    }
  ];
}
