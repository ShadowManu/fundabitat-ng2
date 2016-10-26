import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ShellComponent } from './shell';

import { AboutComponent } from './about';
import { TeamComponent } from './team';
import { RelationsComponent } from './relations';
import { AreasComponent } from './areas';
import { ProgramsComponent } from './programs';
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
          { path: 'programas', component: ProgramsComponent },
          { path: 'publicaciones', component: PublicationsComponent }
        ]
      }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
