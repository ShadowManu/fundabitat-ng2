'use strict';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { appRoutingModule } from './app.routing';
import { CoreModule } from './core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav';
import { HomeComponent } from './home';
import { AboutComponent } from './about';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    appRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
