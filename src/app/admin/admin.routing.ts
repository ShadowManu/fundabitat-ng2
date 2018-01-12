import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminIndexComponent } from './index/index';
import { AdminProgramsComponent, AdminEditProgramComponent } from './programs';

import { AuthGuard } from 'app/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '',  component: AdminIndexComponent, data: { token: 'ADMIN' } },
          { path: 'programas', component: AdminProgramsComponent, data: { token: 'ADMIN' } },
          { path: 'programas/:id', component: AdminEditProgramComponent, data: { token: 'ADMIN' } }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
