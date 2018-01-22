import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map, switchMap, tap } from 'rxjs/operators';

import { normalizeCollection, normalizeDoc, mixDocuments } from './helpers';
import { LanguageService } from './language.service';
import { FirestoreId, Program, Section } from './types';

@Injectable()
export class ProgramsService {

  constructor(
    private firestore: AngularFirestore,
    private langSvc: LanguageService
  ) { }

  fetchProgram(id: FirestoreId): Observable<Program> {
    return this.langSvc.runWithLangSuffix(suffix =>
      this.firestore.doc(`programs${suffix}/${id}`).snapshotChanges()
      .pipe(map(normalizeDoc))
    );
  }

  fetchSections(): Observable<Section[]> {
    return this.langSvc.runWithLangSuffix(suffix =>
      this.firestore.collection(`program-sections${suffix}`)
      .snapshotChanges().map(normalizeCollection)
    );
  }

  fetchAll(): Observable<Section[]> {
    return this.langSvc.runWithLangSuffix(suffix =>
      combineLatest(
        this.firestore.collection(`program-sections${suffix}`).snapshotChanges(),
        this.firestore.collection(`programs${suffix}`, ref => ref.orderBy('title', 'desc')).snapshotChanges(),
        mixDocuments
      )
    );
  }

  createProgram(program: Program): Promise<any> {
    let suffix = this.langSvc.suffix;
    return this.firestore.collection(`programs${suffix}`).add(program);
  }

  editProgram(id: FirestoreId, program: Program) {
    let suffix = this.langSvc.suffix;
    return this.firestore.doc<Program>(`programs${suffix}/${id}`).update(program);
  }

  deleteProgram(id: string): Promise<any> {
    let suffix = this.langSvc.suffix;
    return this.firestore.doc<Program>(`programs${suffix}/${id}`).delete();
  }
}
