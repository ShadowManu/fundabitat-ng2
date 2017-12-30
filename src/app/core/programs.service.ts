import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { switchMap } from 'rxjs/operators';

import { mixDocuments, normalizeDocArray } from './helpers';
import { LanguageService } from './language.service';
import { Program, Section } from './types';

@Injectable()
export class ProgramsService {

  constructor(
    private firestore: AngularFirestore,
    private langSvc: LanguageService
  ) { }

  fetchSections(): Observable<Section[]> {
    return this.firestore.collection('program-sections')
    .snapshotChanges().map(normalizeDocArray);
  }

  fetchAll(): Observable<Section[]> {
    return this.langSvc.language$.pipe(
      switchMap(lang => {
        let suffix = this.langSvc.asSuffix(lang);

        return combineLatest(
          this.firestore.collection(`program-sections${suffix}`).snapshotChanges(),
          this.firestore.collection(`programs${suffix}`, ref => ref.orderBy('title', 'desc')).snapshotChanges(),
          mixDocuments
        );
      })
    );
  }

  createProgram(program: Program): Promise<any> {
    return this.firestore.collection('programs').add(program);
  }

  deleteProgram(id: string): Promise<any> {
    return this.firestore.doc<Program>(`programs/${id}`).delete();
  }
}
