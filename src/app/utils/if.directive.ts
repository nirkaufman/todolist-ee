import {Directive, ElementRef, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[tdIf]'
})
export class IfDirective {
  private template: TemplateRef<any>;
  private container: ViewContainerRef;

  constructor(template: TemplateRef<any>, container: ViewContainerRef) {
    this.template  = template;
    this.container = container;
  }

  @Input()
  set tdIf(arr: any[]) {
    arr.forEach(item => this.container.createEmbeddedView(this.template))
  }


}
