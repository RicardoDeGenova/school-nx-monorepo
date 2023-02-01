import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent  {
    @Output() isMenuButtonShowing = new EventEmitter<boolean>();

    internalIsMenuShowing = false;

    onUserMenuClicked(): void{
        this.internalIsMenuShowing = !this.internalIsMenuShowing;
        const input = document.getElementById('user-menu-button');

        if (!this.internalIsMenuShowing) input?.blur();

        this.isMenuButtonShowing.emit(this.internalIsMenuShowing);
    }
}
