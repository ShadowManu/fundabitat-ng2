import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { AdminIndexComponent } from './index/index';
import {
  AdminEditProgramComponent,
  AdminProgramPanelComponent,
  AdminProgramsComponent
} from './programs';
import { AdminHeaderComponent } from './shared';

@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,

    // Programs
    AdminEditProgramComponent,
    AdminProgramPanelComponent,
    AdminProgramsComponent,

    // Shared
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,

    AdminRoutingModule
  ]
})
export class AdminModule { }
