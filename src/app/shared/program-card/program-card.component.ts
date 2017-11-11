import { Component, Input } from '@angular/core';

import { Program } from 'app/core';

@Component({
  selector: 'fd-program-card',
  templateUrl: 'program-card.component.html',
  styleUrls: ['program-card.component.scss']
})
export class ProgramCardComponent {
  @Input() program: Program;
}