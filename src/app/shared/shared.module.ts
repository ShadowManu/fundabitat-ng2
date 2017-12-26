import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { DividerComponent } from './divider/divider.component';
import { FireSrcDirective } from './fire-src/fire-src.directive';
import { LanguageSelectComponent } from './language-select';
import { ProgramCardComponent } from './program-card';

@NgModule({
  declarations: [
    DividerComponent,
    FireSrcDirective,
    LanguageSelectComponent,
    ProgramCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    DividerComponent,
    FireSrcDirective,
    LanguageSelectComponent,
    ProgramCardComponent
  ]
})
export class SharedModule { }
