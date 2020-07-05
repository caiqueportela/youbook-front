import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBindHtml]'
})
export class BindHtmlDirective implements OnChanges {

  @Input() htmlValue = '';

  constructor(
    private element: ElementRef<any>
  ) { }

  ngOnChanges(): void {
    this.element.nativeElement.innerHTML = this.htmlValue;
  }

}
