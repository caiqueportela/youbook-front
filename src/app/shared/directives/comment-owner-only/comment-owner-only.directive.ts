import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { PostComment } from 'src/app/models/post-comment';
import { UserService } from 'src/app/core/services/user/user.service';

@Directive({
  selector: '[appCommentOwnerOnly]'
})
export class CommentOwnerOnlyDirective implements OnInit {

  @Input() ownedComment: PostComment;
  @Input() rootNode;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (!user || user.userId !== this.ownedComment.owner.userId){
        this.renderer.removeChild(this.rootNode, this.element.nativeElement);
      }
    });
  }

}
