import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralIf]',
  standalone: true,
})
export class MyStructuralIfDirective {
  piroba?: boolean;

  @Input() set appMyStructuralIf(condition: boolean) {
    this.piroba = condition;
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
