import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from "rxjs";

@Injectable()
export class AboutResolve implements Resolve<FirebaseObjectObservable<any>> {

  constructor(private fire: AngularFire) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FirebaseObjectObservable<any>> {
    let obs = this.fire.database.object('/about');
    return obs.first().map(() => obs);
  }
}
