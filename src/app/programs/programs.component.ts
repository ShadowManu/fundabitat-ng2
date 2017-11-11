import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentChangeAction as DAC } from 'angularfire2/firestore/interfaces';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { groupBy } from 'lodash';

import { HeaderService } from '../header';
import { mixDocuments } from 'app/core';

@Component({
  selector: 'fd-programs',
  templateUrl: 'programs.component.html',
  styleUrls: ['programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  sections$ = this.firestore.collection('program-sections').valueChanges();

  constructor(
    private firestore: AngularFirestore,
    private headerSvc: HeaderService,
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle('Programas y Proyectos');

    this.sections$ = combineLatest(
      this.firestore.collection('program-sections').snapshotChanges(),
      this.firestore.collection('programs').snapshotChanges(),
      mixDocuments
    );
  }
}
