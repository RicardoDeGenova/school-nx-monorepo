import { Component } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isMenuShowing = false;
  isMouseOverButtons = false;

  async onMouseLeaveButton(): Promise<void> {
    await this.delay(300);

    this.isMenuShowing = false;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
