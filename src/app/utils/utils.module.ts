import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkDirective } from './talk.directive';
import { IfDirective } from './if.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TalkDirective, IfDirective],
  exports: [TalkDirective,IfDirective]
})
export class UtilsModule { }
