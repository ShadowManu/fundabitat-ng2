import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          { path: 'login', component: LoginComponent, data: { token: 'ADMIN' } }
        ]
      },
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
