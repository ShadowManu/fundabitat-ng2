import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

@Injectable()
export class ProgramsResolve {
  constructor(private firestore: AngularFirestore) { }
}
