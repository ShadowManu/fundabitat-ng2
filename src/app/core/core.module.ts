import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';

import { AuthService } from './auth.service';
import { ProgramsService } from './programs.service';

import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    ProgramsService,

    AuthGuard
  ]
})
export class CoreModule { }
