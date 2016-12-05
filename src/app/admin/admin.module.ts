import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { AdminIndexComponent } from './index/index';
import { AdminProgramsComponent } from './programs';

@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,
    AdminProgramsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
