import { Component } from '@angular/core';

import { RIPPLE_COLOR } from 'app/core';

const NAVIGATION_ITEMS = [
  {
    name: 'Quienes Somos', link: "/nosotros",
    childs: [
      { name: 'Nuestro equipo', link: "/nosotros/equipo" },
      { name: 'Relaciones', link: "/nosotros/relaciones" },
    ]
  },
  { name: 'Áreas Temáticas', link: "/areas" },
  { name: 'Programas', link: "/programas" },
  { name: 'Publicaciones', link: "/publicaciones" }
];

@Component({
  selector: 'fd-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent {
  get items() { return NAVIGATION_ITEMS; }
  get rippleColor() { return RIPPLE_COLOR; }
}
