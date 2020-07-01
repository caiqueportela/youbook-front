import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

import { Article } from 'src/app/models/article';
import { UserService } from 'src/app/core/services/user/user.service';

@Directive({
  selector: '[appArticleOwnerOnly]'
})
export class ArticleOwnerOnlyDirective implements OnInit {

  @Input() ownedArticle: Article;
  @Input() rootNode;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (!user || user.userId !== this.ownedArticle.owner.userId){
        this.renderer.removeChild(this.rootNode, this.element.nativeElement);
      }
    });
  }

}
