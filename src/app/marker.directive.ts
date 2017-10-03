import {Directive, HostBinding, HostListener, Input, ElementRef, Renderer2} from '@angular/core';

/**
 * attribute directive
 * interact with the host properties
 */
@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  @Input()
  public appMarker;

  @HostBinding('style.backgroundColor')
  public bgColor: string;

  @HostListener('mouseenter')
  mark() {
    this.bgColor = this.appMarker;
  }

  @HostListener('mouseleave')
  clear() {
    this.bgColor = '';
  }

}
