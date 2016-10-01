'use strict';

import { Component } from '@angular/core';

@Component({
  selector: 'fd-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent {
  // TODO REFACTOR in json file
  links: any = [
    {
      name: 'Quienes Somos', link: "/nosotros",
      childs: [
        { name: 'Nuestro equipo', link: "/" },
        { name: 'Relaciones', link: "/" },
      ]
    },
    { name: 'Áreas Temáticas', link: "/areas" },
    { name: 'Programas', link: "/" },
    { name: 'Publicaciones', link: "/" }
  ];
}
