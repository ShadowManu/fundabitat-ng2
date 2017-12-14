import { Component } from '@angular/core';

import { RIPPLE_COLOR, LanguageService, Language, LanguageData } from 'app/core';

type NavigationData = {
  name: string;
  link: string;
  childs?: NavigationData;
}[];

const NAVIGATION_DATA: LanguageData<NavigationData> = new Map<Language, NavigationData>([
  ['es', [
    {
      name: 'Quienes Somos', link: '/nosotros',
      childs: [
        { name: 'Nuestro equipo', link: '/nosotros/equipo' },
        { name: 'Relaciones', link: '/nosotros/relaciones' }
      ]
    },
    { name: 'Áreas Temáticas', link: '/areas' },
    { name: 'Programas', link: '/programas' },
    { name: 'Publicaciones', link: '/publicaciones' }
  ]],
  ['en', [
    {
      name: 'About us', link: '/nosotros',
      childs: [
        { name: 'Our team', link: '/nosotros/equipo' },
        { name: 'Relations', link: '/nosotros/relaciones' }
      ]
    },
    { name: 'Thematic Areas', link: '/areas' },
    { name: 'Programs', link: '/programas' },
    { name: 'Publications', link: '/publicaciones' }
  ]]
]);

@Component({
  selector: 'fd-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private langSvc: LanguageService) { }

  get items() { return this.data; }

  get data(): NavigationData { return this.langSvc.select(NAVIGATION_DATA); }

  get rippleColor() { return RIPPLE_COLOR; }
}
