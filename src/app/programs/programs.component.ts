import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { FirebaseListObservable } from "angularfire2";

import { HeaderService } from '../header';

@Component({
  selector: 'fd-programs',
  templateUrl: 'programs.component.html',
  styleUrls: ['programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs: FirebaseListObservable<any>;

  constructor(
    private headerSvc: HeaderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle('Programas y Proyectos');
    this.route.data.subscribe(({ programs }) => { this.programs = programs; });
  }
}
