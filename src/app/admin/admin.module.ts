import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { AdminIndexComponent } from './index/index';

@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent
  ],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
