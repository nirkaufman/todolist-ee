import { Component } from '@angular/core';

@Component({
  selector: 'td-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'td works!';
}
