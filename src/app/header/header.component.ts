import { Component } from '@angular/core';

import { map } from 'rxjs/operators';

import { LanguageService, LanguageData, NavigationService } from 'app/core';

const ORG: LanguageData<string> = {
  es: 'Fundación venezolana para la preservación del hábitat, promoción y defensa de las culturas',
  en: 'Venezuelan Foundation for the preservation of the habitat, promotion and defense of cultures'
}

@Component({
  selector: 'fd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  title$ = this.navSvc.navigationData$.pipe(map(data => data && data.title || 'Fundabitat'));
  org$ = this.langSvc.language$.pipe(map(lang => ORG[lang]));
  images: string[];

  constructor(
    private langSvc: LanguageService,
    private navSvc: NavigationService
  ) {
    let simples: string[] = Array(9).fill(0).map((e, i) => `/assets/images/header/${i+1}.jpg`);
    this.images = simples.concat(simples);
  }

}
