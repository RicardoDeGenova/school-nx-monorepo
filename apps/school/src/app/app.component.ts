import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'school-nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private router: Router) {}

    isLoginRoute(): boolean {
        return this.router.url !== '/login';
    }

}
