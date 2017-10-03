import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template: TemplateRef<any>,
              private entry: ViewContainerRef) {
  }

  @Input()
  set appIf(arr) {
    arr.forEach( item => {
      this.entry.createEmbeddedView(this.template);
    });
  }


}
