import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkDirective } from './talk.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TalkDirective],
  exports: [TalkDirective]
})
export class UtilsModule { }
