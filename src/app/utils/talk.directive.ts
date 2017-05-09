import {Directive, ElementRef, Renderer2, Renderer, HostListener} from '@angular/core';
import {renderDetachView} from "@angular/core/src/view/view_attach";

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


