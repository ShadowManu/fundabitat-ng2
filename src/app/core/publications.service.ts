import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { normalizeCollection } from './helpers';
import { LanguageService } from './language.service';
import { Publication } from './types';

@Injectable()
export class PublicationsService {

  constructor(
    private firestore: AngularFirestore,
    private langSvc: LanguageService
  ) { }

  fetchPublications(): Observable<Publication[]> {
    return this.langSvc.runWithLangSuffix(suffix =>
      this.firestore.collection(`publications${suffix}`, ref => ref.orderBy('order', 'asc'))
        .snapshotChanges().pipe(map(normalizeCollection))
    );
  }
}
