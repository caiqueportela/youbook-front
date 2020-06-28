import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { Post } from 'src/app/models/post';
import { UserService } from 'src/app/core/services/user/user.service';

@Directive({
  selector: '[appPostOwnerOnly]'
})
export class PostOwnerOnlyDirective implements OnInit {

  @Input() ownedPost: Post;
  @Input() rootNode;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (!user || user.userId !== this.ownedPost.owner.userId){
        this.renderer.removeChild(this.rootNode, this.element.nativeElement);
      }
    });
  }

}
