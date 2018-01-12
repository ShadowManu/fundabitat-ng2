import { Injectable } from '@angular/core';
import { ActivatedRoute as ARoute, Router, NavigationEnd } from '@angular/router';

import { combineLatest } from 'rxjs/observable/combineLatest';
import { filter, map, pluck, startWith, tap } from 'rxjs/operators';

import { Language, LanguageData, LanguageService } from './language.service';

export const findLeafAR = (arg: ARoute): ARoute => arg.firstChild ? findLeafAR(arg.firstChild) : arg;
export const findLeafFromRouter = (router: Router): ARoute => findLeafAR(router.routerState.root);

// export const debug = <T>(tag: string) => tap<T>(val => console.log(`${tag} value:`, val), err => console.error(`${tag} error:`, err), () => console.log(`${tag} completed.`));

@Injectable()
export class NavigationService {
  navigationData$ = combineLatest(
    this.langSvc.language$,
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(undefined),
      map(() => findLeafFromRouter(this.router)),
      filter(route => route.outlet === 'primary'),
      pluck<ARoute, NavigationToken>('snapshot', 'data', 'token')
    ),
    (lang, token) => lang && token && LANGUAGE_NAVIGATION_DATA[lang][token]
  );

  constructor(
    private router: Router,
    private langSvc: LanguageService
  ) { }
}

type NavigationToken
  = 'HOME'
  | 'ABOUTUS'
  | 'TEAM'
  | 'RELATIONS'
  | 'AREAS'
  | 'PROGRAMS'
  | 'PUBLICATIONS'
  | 'CONTACT'
  | 'ADMIN'
  ;

type NavigationData = { [T in NavigationToken]: { title: string; } };

type LanguageNavigationData = LanguageData<NavigationData>;

const LANGUAGE_NAVIGATION_DATA: LanguageNavigationData = {
  es: {
    HOME: { title: 'Inicio' },
    ABOUTUS: { title: 'Nosotros' },
    TEAM: { title: 'Nuestro Equipo' },
    RELATIONS: { title: 'Relaciones' },
    AREAS: { title: 'Areas' },
    PROGRAMS: { title: 'Programas' },
    PUBLICATIONS: { title: 'Publicaciones' },
    CONTACT: { title: 'Contacto' },
    ADMIN: { title: 'Administración del sitio' }
  },
  en: {
    HOME: { title: 'Home' },
    ABOUTUS: { title: 'About us' },
    TEAM: { title: 'Our team' },
    RELATIONS: { title: 'Relations' },
    AREAS: { title: 'Thematic Areas' },
    PROGRAMS: { title: 'Programs' },
    PUBLICATIONS: { title: 'Publications' },
    CONTACT: { title: 'Contact' },
    ADMIN: { title: 'Site Administration' }
  }
};
