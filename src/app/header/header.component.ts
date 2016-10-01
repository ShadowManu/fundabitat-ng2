'use strict';

import { Component } from '@angular/core';

import { HeaderService } from './header.service';

@Component({
  selector: 'fd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  title: string = 'FUNDABITAT';

  constructor(private headerSvc: HeaderService ) {
    this.headerSvc.whenTitleChanges.subscribe((title: string) => {
      this.title = title;
    })
  }
}
