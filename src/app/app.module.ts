import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule, ReactiveFormsModule],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
