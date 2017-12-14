import { Component } from '@angular/core';

import { AuthService } from 'app/core';

@Component({
  selector: 'fd-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent {

  constructor(private authSvc: AuthService) { }

  get authState() { return this.authSvc.authState; }

  signOut() { return this.authSvc.signOut(); }
}
