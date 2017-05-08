import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'td-title',
  template: '<h1>{{ title }}</h1>',
})
export class TitleComponent {

  @Input()
  public title: string;

}
