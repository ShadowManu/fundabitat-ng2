import { Component, Input, } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Program, Section } from 'app/core';

@Component({
  selector: 'fd-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  @Input() link: string;
  @Input() title: string;
}
