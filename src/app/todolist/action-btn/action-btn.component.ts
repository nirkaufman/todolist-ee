import {Component, OnInit} from '@angular/core';

@Component({
  selector   : 'td-action-btn',
  template: `
  <button class="clear-completed">Clear completed</button>
  `,
})
export class ActionBtnComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
