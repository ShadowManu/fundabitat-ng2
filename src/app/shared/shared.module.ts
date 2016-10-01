'use strict';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    DividerComponent
  ]
})
export class SharedModule { }
