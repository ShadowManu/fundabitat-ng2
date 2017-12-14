import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material'

import { AuthService } from './auth.service';
import { ProgramsService } from './programs.service';

@NgModule({
  imports: [
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    ProgramsService
  ]
})
export class CoreModule { }
