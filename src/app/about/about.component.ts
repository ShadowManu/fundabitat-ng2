import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private headerSvc: HeaderService
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle('Quienes Somos');
  }

}
