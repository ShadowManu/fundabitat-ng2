import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ShellComponent } from './shell';

import { AboutComponent } from './about';
import { TeamComponent } from './team';
import { RelationsComponent } from './relations';
import { AreasComponent } from './areas';
import { ProgramsComponent, ProgramsResolve } from './programs';
import { PublicationsComponent } from './publications';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: '',
        component: ShellComponent,
        children: [
          { path: 'nosotros', component: AboutComponent },
          { path: 'nosotros/equipo', component: TeamComponent },
          { path: 'nosotros/relaciones', component: RelationsComponent },
          { path: 'areas', component: AreasComponent },
          { path: 'programas', component: ProgramsComponent, resolve: { programs: ProgramsResolve } },
          { path: 'publicaciones', component: PublicationsComponent },

          { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
          { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
        ]
      }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
