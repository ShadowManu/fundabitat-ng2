import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { groupBy } from 'lodash';

import { HeaderService } from '../header';
import { ProgramsService } from 'app/core';

@Component({
  selector: 'fd-programs',
  templateUrl: 'programs.component.html',
  styleUrls: ['programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  sections$ = this.programsSvc.fetchAll();

  constructor(
    private headerSvc: HeaderService,
    private programsSvc: ProgramsService
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle('Programas y Proyectos');
  }
}
