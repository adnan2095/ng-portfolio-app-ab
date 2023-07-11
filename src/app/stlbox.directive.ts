import {
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStlbox]',
})
export class StlboxDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.height') fcolor: string = '20ch';
}
