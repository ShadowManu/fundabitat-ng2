'use strict';

import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['relations.component.scss']
})
export class RelationsComponent implements OnInit {

  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.headerSvc.setTitle('Relaciones');
  }

}