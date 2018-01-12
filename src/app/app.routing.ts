import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ShellComponent } from './shell';

import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { TeamComponent } from './team';
import { RelationsComponent } from './relations';
import { AreasComponent } from './areas';
import { ProgramsComponent } from './programs';
import { PublicationsComponent } from './publications';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { token: 'HOME' } },
      {
        path: '',
        component: ShellComponent,
        children: [
          { path: 'nosotros', component: AboutComponent, data: { token: 'ABOUTUS' } },
          { path: 'contacto', component: ContactComponent, data: { token: 'CONTACT' } },
          { path: 'nosotros/equipo', component: TeamComponent, data: { token: 'TEAM' } },
          { path: 'nosotros/relaciones', component: RelationsComponent, data: { token: 'RELATIONS' } },
          { path: 'areas', component: AreasComponent, data: { token: 'AREAS' } },
          { path: 'programas', component: ProgramsComponent, data: { token: 'PROGRAMS' } },
          { path: 'publicaciones', component: PublicationsComponent, data: { token: 'PUBLICATIONS' } },

          { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
          { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
