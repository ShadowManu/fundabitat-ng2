import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class AboutResolve implements Resolve<FirebaseObjectObservable<any>> {

  constructor(private fire: AngularFire) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let obs = this.fire.database.object('/about');
    return obs.first().map(() => obs);
  }
}
