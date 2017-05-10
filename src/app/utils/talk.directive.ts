import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[tdTalk]'
})
export class TalkDirective {
  private element: ElementRef;
  private renderer: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2) {
    this.element  = element;
    this.renderer = renderer;
  }
}


