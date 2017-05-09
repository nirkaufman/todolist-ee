import { Component, OnInit } from '@angular/core';
import {ItemsService} from "./items.service";

@Component({
  selector: 'td-todolist',
  template: `
    <section class="todoapp">
      <td-header>
        <td-title [title]="appName"></td-title>
        <td-item-box (itemAdded)="items.addItem($event)"></td-item-box>
      </td-header>

      <td-main>
        <td-toggle></td-toggle>
        <td-items [items]="items.getItems()"></td-items>
      </td-main>

      <td-footer>
        <td-counter [count]="items.getItems() | countBy:'completed':false "></td-counter>
        <td-action-btn></td-action-btn>
      </td-footer>

    </section>
  `,
})
export class TodolistComponent implements OnInit {

  public appName: string;
  public items: ItemsService;

  constructor(items: ItemsService) {
    this.items   = items;
    this.appName = "NIROS";
  }

  ngOnInit() {
  }

}
