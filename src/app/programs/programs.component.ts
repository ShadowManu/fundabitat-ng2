import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentChangeAction as DAC } from 'angularfire2/firestore/interfaces';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { groupBy } from 'lodash';

import { HeaderService } from '../header';

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

function mixObservables(sections$: Observable<DAC[]>, programs$: Observable<DAC[]>) {
  combineLatest(sections$, programs$, mixDocuments)
}

function mixDocuments(sections: DAC[], programs: DAC[]) {
  let groupedPrograms = groupBy(programs.map(normalizeDoc), idGrouper);

  return sections.map(s => {
    let doc = normalizeDoc(s);
    return { ...doc, programs: groupedPrograms[doc.id] };
  });
}

function normalizeDoc(doc: DAC): any {
  return { ...doc.payload.doc.data(), $id: doc.payload.doc.id };
}

function idGrouper(doc: any): string { return doc.$id; }
