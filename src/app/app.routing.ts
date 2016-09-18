'use strict';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

export const appRoutingProviders: any[] = [ ];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

