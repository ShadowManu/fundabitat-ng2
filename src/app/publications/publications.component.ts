import { Component } from '@angular/core';

import { PublicationsService, Publication } from 'app/core';

import { LanguageService, Language, LanguageData } from 'app/core';

interface PublicationsData {
  p1: string;
  p2: string;
}

const PUBLICATIONS_DATA: LanguageData<PublicationsData> = {
  es: {
    p1: 'FUNDABITAT impulsa iniciativas que promuevan la inversión en recursos humanos, identifiquen y analicen problemas, e implementen soluciones, promoviendo la participación comunitaria directa.',
    p2: 'Incluye como parte integral de sus actividades, la producción de documentos impresos y audiovisuales relacionados con sus temas de investigación.'
  },
  en: {
    p1: 'FUNDABITAT impels initiatives, which promote the inversion in human resources identifying and analysing problems and implementing solutions, promoting the direct participation of the community.',
    p2: 'Including as an integral part of its activities the production of documents, printed matters and audiovisuals with destinies to the communities related with their themes of investigation.'
  }
}

@Component({
  selector: 'fd-publications',
  templateUrl: 'publications.component.html',
  styleUrls: ['publications.component.scss']
})
export class PublicationsComponent {
  publications$ = this.pubSvc.fetchPublications();

  constructor(
    private pubSvc: PublicationsService,
    private langSvc: LanguageService
  ) { }

  get data() { return this.langSvc.select(PUBLICATIONS_DATA); }
}
