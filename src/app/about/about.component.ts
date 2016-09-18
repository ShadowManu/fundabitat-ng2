'use strict';

import { Component } from '@angular/core';

@Component({
  selector: 'fd-about',
  templateUrl: './about.component.pug',
  styleUrls: ['about.component.scss']
})
export class AboutComponent {

  // TODO MOVE to Sidenav Component
  // TODO FIX real links
  links: any = [
    {
      name: 'Quienes Somos', link: "/",
      childs: [
        { name: 'Nuestro equipo', link: "/" },
        { name: 'Relaciones', link: "/" },
      ]
    },
    { name: 'Áreas Temáticas', link: "/" },
    { name: 'Programas', link: "/" },
    { name: 'Publicaciones', link: "/" }
  ];
}
