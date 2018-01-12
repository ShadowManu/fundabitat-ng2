import { Component } from '@angular/core';

import { LanguageService, Language, LanguageData } from 'app/core';

interface HomeData {
  description: string;
  knowMore: string;
  duties: string;
}

const HOME_DATA: LanguageData<HomeData> = {
  es: {
    description: 'Asociación Civil, sin fines de lucro constituida para realizar investigaciones multi e interdisciplinarias, relativas al hábitat y su mejor apropiación',
    knowMore: 'Conoce más sobre nosotros',
    duties: 'crea y coordina'
  },
  en: {
    description: 'Is a civil, non-lucrative association, with permanent seat in Venezuela, constituted for the realisation of applied research of multidisciplinary character to habitat and its best appropiation',
    knowMore: 'Know more about us',
    duties: 'creates and coordinates'
  }
};

@Component({
  selector: 'fd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  constructor(private langSvc: LanguageService) { }

  get data(): HomeData { return this.langSvc.select(HOME_DATA); }
}
