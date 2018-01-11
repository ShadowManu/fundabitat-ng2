import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { groupBy } from 'lodash';

import { LanguageService, Language, LanguageData, ProgramsService } from 'app/core';
import { HeaderService } from '../header';

interface ProgramData {
  title: string;
  description: string;
}

const PROGRAMS_DATA: LanguageData<ProgramData> = {
  es: {
    title: 'Programas y Proyectos',
    description: 'FUNDABITAT desarrolla los Proyectos, en el marco de sus Programas de Formación y Capacitación:'
  },
  en: {
    title: 'Programs and Proyects',
    description: 'FUNDABITAT develops the Projects, within the framework of its Training Programs:'
  }
};

@Component({
  selector: 'fd-programs',
  templateUrl: 'programs.component.html',
  styleUrls: ['programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  sections$ = this.programsSvc.fetchAll();

  constructor(
    private headerSvc: HeaderService,
    private langSvc: LanguageService,
    private programsSvc: ProgramsService
  ) { }

  get data(): ProgramData { return this.langSvc.select(PROGRAMS_DATA); }

  ngOnInit() {
    this.headerSvc.setTitle(this.data.title);
  }
}
