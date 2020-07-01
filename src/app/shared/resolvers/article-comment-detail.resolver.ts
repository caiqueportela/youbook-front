import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article/article.service';
import { ArticleComment } from 'src/app/models/article-comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommentDetailResolver implements Resolve<Observable<ArticleComment>> {

  constructor(
    private service: ArticleService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleComment> {
    const articleId: number = route.params.articleId;
    const commentId: number = route.params.commentId;

    return this.service.retrieveComment(articleId, commentId);
  }

}
