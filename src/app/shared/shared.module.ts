import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DividerComponent } from './divider/divider.component';
import { FireSrcDirective } from './fire-src/fire-src.directive';

@NgModule({
  declarations: [
    DividerComponent,
    FireSrcDirective
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    DividerComponent,
    FireSrcDirective
  ]
})
export class SharedModule { }
