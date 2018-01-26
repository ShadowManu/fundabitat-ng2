import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';

import { AuthService } from './auth.service';
import { LanguageService } from './language.service';
import { NavigationService } from './navigation.service';
import { ProgramsService } from './programs.service';
import { PublicationsService } from './publications.service';

import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    LanguageService,
    NavigationService,
    ProgramsService,
    PublicationsService,

    AuthGuard
  ]
})
export class CoreModule { }
