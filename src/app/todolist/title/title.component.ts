import {Component, Input} from '@angular/core';

@Component({
  selector: 'td-title',
  template: `
    <input type="checkbox"
           (change)="flag =!flag">
    <h1>{{ title }}</h1>
  `,
})
export class TitleComponent {

  @Input()
  public title: string;

}
