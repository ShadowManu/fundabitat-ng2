import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { appRoutingModule } from './app.routing';
import { CoreModule } from './core';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell';
import { SidenavComponent } from './sidenav';
import { HeaderComponent, HeaderService } from './header';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { AreasComponent } from './areas';
import { RelationsComponent } from './relations';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SidenavComponent,
    HeaderComponent,

    HomeComponent,
    AboutComponent,
    AreasComponent,
    RelationsComponent
  ],
  providers: [
    HeaderService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),

    appRoutingModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
