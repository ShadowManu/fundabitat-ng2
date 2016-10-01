'use strict';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about/about.component';
import { ShellComponent } from './shell';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'nosotros', component: AboutComponent }
    ]
  }
  ,
];

export const appRoutingProviders: any[] = [];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

