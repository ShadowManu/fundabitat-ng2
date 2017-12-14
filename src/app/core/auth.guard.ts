import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from 'app/core';

@Injectable()
export class AuthGuard implements CanActivate  {
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  canActivate() {
    return this.authSvc.authState
    .do(s => { if (!s) this.router.navigateByUrl('/auth/login'); })
    .map(s => !!s);
  }
}
