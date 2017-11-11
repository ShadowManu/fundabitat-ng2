import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Program, Section } from 'app/core';

@Component({
  selector: 'fd-admin-program-panel',
  templateUrl: './admin-program-panel.component.html',
  styleUrls: ['./admin-program-panel.component.scss']
})
export class AdminProgramPanelComponent {
  @Input() sections: Section[];
  @Input() program: Program;

  @Input() title: string;
  @Input() action: string;

  @Output() fdSubmit = new EventEmitter<Program>();

  onSubmit(form: NgForm) {
    let program: Program = form.value;
    this.fdSubmit.next(program);
  }
}
