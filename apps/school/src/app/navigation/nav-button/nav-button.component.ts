import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-nav-button',
  templateUrl: './nav-button.component.html',
})
export class NavButtonComponent {
    @Input() buttonName = 'button';
    @Input() href = '#';

    @Output() clickedEvent = new EventEmitter();

    onClicked(): void {
        this.clickedEvent.emit('clicked');
    }
}
