import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'td-item',
  template: `
    <li>
      <div class="view">
        <input class="toggle"
               [checked]="item.completed"
               type="checkbox">
        <label>{{ item.title }}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `
})
export class ItemComponent {

  @Input()
  public item: Item;

  @Output()
  public destroy = new EventEmitter<Item>();

}
