import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell';
import { SidenavComponent } from './sidenav';
import { HeaderComponent, HeaderService } from './header';

import { HomeComponent } from './home';
import { AboutComponent, AboutResolve } from './about';
import { AreasComponent } from './areas';
import { RelationsComponent } from './relations';
import { TeamComponent } from './team';
import { ProgramsComponent, ProgramsResolve } from './programs';
import { PublicationsComponent } from './publications';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SidenavComponent,
    HeaderComponent,

    HomeComponent,
    AboutComponent,
    AreasComponent,
    ProgramsComponent,
    PublicationsComponent,
    RelationsComponent,
    TeamComponent
  ],
  providers: [
    HeaderService,

    AboutResolve,
    ProgramsResolve
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule,

    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
