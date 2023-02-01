import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent  {
    @Output() buttonClicked = new EventEmitter();

    onUserMenuClicked():void {
        this.buttonClicked.emit();
    }
}
