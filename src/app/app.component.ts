import {Component} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'td-root',
  template: `
    <h1>FORMS</h1>
    <form [formGroup]="loginForm"
          (ngSubmit)="login()">
      <input type="text"
             placeholder="username"
             formControlName="username">
      <input type="password"
             placeholder="password"
             formControlName="password">
      <button type="submit">login</button>
    </form>
  `,
  styles  : [`
    input.ng-invalid {
      background-color: red;
    }

    input.ng-valid {
      background-color: green;
    }
  `]
})
export class AppComponent {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [null],
      password: null
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  login() {
    console.log(this.loginForm.value);
  }

}
