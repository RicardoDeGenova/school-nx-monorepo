import { Component } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    isMenuShowing = false;

    onUserMenuClicked(): void{
        this.isMenuShowing = !this.isMenuShowing;
    }
}
