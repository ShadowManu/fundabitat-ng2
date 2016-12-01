import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import { mapValues, values } from 'lodash';

@Injectable()
export class ProgramsResolve implements Resolve<FirebaseListObservable<any>> {

  constructor(private fire: AngularFire) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FirebaseListObservable<any>> {
    let obs = this.fire.database.list('/programs').map(schemaTransform);
    return obs.first().map(() => obs);
  }
}

function schemaTransform(sections: any) {
  return sections.map((sect) => mapValues(sect, (value, key) => {
    if (key === 'programs') return values(value);
    return value;
  }));
}
