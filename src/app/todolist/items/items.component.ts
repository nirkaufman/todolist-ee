import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {Item} from "../item";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'td-items',
  template: `
    <ul class="todo-list">
      <td-item *ngFor="let currItem of items"
               [item]="currItem"></td-item>
    </ul>
  `,
})
export class ItemsComponent {

  @Input()
  public items: Item[];


}
