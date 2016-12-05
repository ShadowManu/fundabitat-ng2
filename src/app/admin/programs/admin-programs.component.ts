import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import { flattenDeep } from 'lodash';

import { schemaTransform } from '../../core/helpers';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'fd-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.scss']
})
export class AdminProgramsComponent implements OnInit {
  fireObs: FirebaseListObservable<any>;
  transform: Observable<any>;
  sections: Observable<any>;
  programs: Observable<any>;

  newSection: FormGroup;
  newProgram: FormGroup;

  constructor(private fire: AngularFire, private builder: FormBuilder) {}

  ngOnInit() {
    this.newSection = this.builder.group({ title: [], description: []});
    this.newProgram = this.builder.group({ title: [], description: [], location: [], section: []});

    this.fireObs = this.fire.database.list('/programs');
    this.transform = this.fireObs.map(schemaTransform);
    this.sections = this.transform.map((ss: any[]) => ss.map((s: any) => ({ key: s.$key, title: s.title})));
    this.programs = this.transform.map((ss: any[]) => flattenDeep(ss.map((s: any) => s.programs)));
  }

  onAddSection() {

  }

}
