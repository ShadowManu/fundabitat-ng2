'use strict';

import { Component } from '@angular/core';

@Component({
  selector: 'fd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  title: string = 'Hola Bale soy un Titulo de Fundabitat';
}
