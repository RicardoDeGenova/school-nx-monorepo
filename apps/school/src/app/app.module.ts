import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './navigation/logo/logo.component';
import { NavButtonComponent } from './navigation/nav-button/nav-button.component';
import { BellSvgComponent } from './navigation/bell-button/bell-svg/bell-svg.component';
import { BellButtonComponent } from './navigation/bell-button/bell-button.component';
import { MenuButtonComponent } from './navigation/menu-button/menu-button.component';
import { TokenInterceptor } from './token.interceptor';
import { AppRoutingModule } from './app-routing.module';

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
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
