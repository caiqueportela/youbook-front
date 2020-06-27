import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { UserService } from 'src/app/core/services/user/user.service';

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  @Input() rootNode;

  currentDisplay: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe(user => {
        if (user) {
          this.renderer.appendChild(this.rootNode, this.element.nativeElement);
        } else {
          this.renderer.removeChild(this.rootNode, this.element.nativeElement);
        }
      });
  }

}
