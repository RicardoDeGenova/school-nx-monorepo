import { Component } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    userMenuClicked = false;

    onUserMenuClicked(): void{
        this.userMenuClicked = !this.userMenuClicked;
    }
}
