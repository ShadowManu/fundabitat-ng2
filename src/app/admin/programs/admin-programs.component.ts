import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import { assign, values } from 'lodash';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'fd-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.scss']
})
export class AdminProgramsComponent implements OnInit {
  fireObs: FirebaseListObservable<any>;
  sections: Observable<any>;

  newSection: FormGroup;
  newProgram: FormGroup;

  constructor(
    private fire: AngularFire,
    private builder: FormBuilder,
    private snackBar: MdSnackBar
  ) {}

  ngOnInit() {
    this.fireObs = this.fire.database.list('/programs');
    this.sections = this.fireObs.map(sections =>
      sections.map(section => assign({}, section, { programs: values(section.programs) }))
    )
    .do(val => console.log(val));

    this.newSection = this.builder.group({ title: [], description: []});
    this.newProgram = this.builder.group({ title: [], description: [], location: [], section: []});

  }

  onAddSection() {
    this.fireObs.push(this.newSection.value)
    .then(() => this.snackBar.open('Sección creada exitosamente', undefined, { duration: 2000 }))
    .catch(() => this.snackBar.open('La sección no pudo crearse', undefined, { duration: 2000 }));
    this.newSection.reset();
  }

  onAddProgram() {
    let { section, title, description, location } = this.newProgram.value;

    this.fire.database.list(`/programs/${section}/programs`)
    .push({ title, description, location })
    .then(() => this.snackBar.open('Programa creada exitosamente', undefined, { duration: 2000 }))
    .catch(() => this.snackBar.open('El programa no pudo crearse', undefined, { duration: 2000 }));

    this.newProgram.reset();
  }
}
