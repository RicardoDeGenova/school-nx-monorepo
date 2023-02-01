import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './navigation/logo/logo.component';
import { NavButtonComponent } from './navigation/nav-button/nav-button.component';
import { BellSvgComponent } from './navigation/bell-button/bell-svg/bell-svg.component';
import { BellButtonComponent } from './navigation/bell-button/bell-button.component';
import { MenuButtonComponent } from './navigation/menu-button/menu-button.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'schedule',
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavigationComponent,
    LogoComponent,
    NavButtonComponent,
    BellSvgComponent,
    BellButtonComponent,
    MenuButtonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
