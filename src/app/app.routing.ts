import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ShellComponent } from './shell';

import { AboutComponent } from './about';
import { TeamComponent } from './team';
import { RelationsComponent } from './relations';
import { AreasComponent } from './areas';
import { ProgramsComponent } from './programs';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'nosotros', component: AboutComponent },
      { path: 'nosotros/equipo', component: TeamComponent },
      { path: 'nosotros/relaciones', component: RelationsComponent },
      { path: 'areas', component: AreasComponent },
      { path: 'programas', component: ProgramsComponent },
      { path: 'publicaciones', component: PublicationsComponent }
    ]
  }

];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

