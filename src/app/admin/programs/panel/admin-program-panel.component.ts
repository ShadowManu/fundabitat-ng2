import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FirebaseApp } from 'angularfire2';

import { omitBy, isNil } from 'lodash';

import { Program, Section } from 'app/core';

type UploadState = 'EMPTY' | 'LOADING' | 'UPLOADED' | 'FAILED';

const STATE_TEXTS = new Map<UploadState, string>([
  ['EMPTY', 'Seleccionar Imagen'],
  ['LOADING', 'Subiendo...'],
  ['UPLOADED', '¡Imagen Subida!'],
  ['FAILED', '¡Falló la subida!']
]);

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

  storage = this.fire.storage();

  image: string;
  state: UploadState = 'EMPTY';

  constructor(private fire: FirebaseApp) { }

  get imageText() { return STATE_TEXTS.get(this.state); }

  receiveImage(event: any) {
    let file: File = event.target.files[0];
    let name = file.name;

    this.state = 'LOADING';

    this.storage.ref(name).put(file)
    .then((result) => {
      this.state = 'UPLOADED';
      this.image = name;
    })
    .catch((e) => {
      this.state = 'FAILED';
      // tslint:disable-next-line:no-console
      console.error(e);
    });
  }

  onSubmit(form: NgForm) {
    let program: Program = omitBy(form.value, isNil);
    this.fdSubmit.next(program);
  }
}
