import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.headerSvc.setTitle('Contacto');
  }
}
