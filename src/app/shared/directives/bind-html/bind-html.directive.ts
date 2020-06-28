import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBindHtml]'
})
export class BindHtmlDirective implements OnInit {

  @Input() htmlValue = '';

  constructor(
    private element: ElementRef<any>
  ) { }

  ngOnInit(): void {
    this.element.nativeElement.innerHTML = this.htmlValue;
  }

}
