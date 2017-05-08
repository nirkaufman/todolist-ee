import {Component, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'td-counter',
  template: `
  <span class="todo-count">
    <strong>{{count}}</strong> items left</span>
  `,
})
export class CounterComponent  {

  @Input()
  public count: number;

}
