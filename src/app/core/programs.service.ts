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
    return this.langSvc.runWithLangSuffix(suffix =>
      this.firestore.collection(`program-sections${suffix}`)
      .snapshotChanges().map(normalizeDocArray)
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

  deleteProgram(id: string): Promise<any> {
    let suffix = this.langSvc.suffix;
    return this.firestore.doc<Program>(`programs${suffix}/${id}`).delete();
  }
}
