import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'td-item',
  template: `
    <li [ngClass]="getClass()">
      <div class="view">
        <input class="toggle"
               [checked]="item.completed"
               (change)="item.completed = $event.target.checked"
               type="checkbox">
        <label (dblclick)="item.isEditing = true">{{ item.title }} {{ item.created | date:'short' }}</label>
        <button class="destroy"></button>
      </div>
      <input (keydown.esc)="item.isEditing = false" class="edit">
    </li>
  `
})
export class ItemComponent {

  @Input()
  public item: Item;

  getClass() {
    return {
      'completed': this.item.completed,
      'editing': this.item.isEditing,
    };
  }


}
