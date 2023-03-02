import { Component, Input } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent  {
    @Input() isMenuShowing = false;
    testingColor = this.isMenuShowing ? 'ring-2 ring-offset-2 ring-indigo-500' : '';
}
