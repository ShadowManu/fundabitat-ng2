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
