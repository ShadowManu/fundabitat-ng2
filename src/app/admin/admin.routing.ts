import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminIndexComponent } from './index/index';
import { AdminProgramsComponent } from './programs';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: '',  component: AdminIndexComponent },
          { path: 'programas', component: AdminProgramsComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
