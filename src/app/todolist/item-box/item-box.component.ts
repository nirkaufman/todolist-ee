import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'td-item-box',
  template: `
    <input class="new-todo"
           type="text"
           (keydown.enter)="itemAdded.emit($event.target.value)"
           placeholder="What needs to be done?"
           autofocus>
  `,
})
export class ItemBoxComponent {

  @Output()
  public itemAdded = new EventEmitter<string>();


}
