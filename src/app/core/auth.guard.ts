import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { tap, map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate  {
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  canActivate() {
    return this.authSvc.authState.pipe(
      tap(s => { if (!s) this.router.navigateByUrl('/auth/login'); }),
      map(s => !!s)
    );
  }
}
