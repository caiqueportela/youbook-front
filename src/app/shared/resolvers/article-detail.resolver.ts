import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article/article.service';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailResolver implements Resolve<Observable<Article>> {

  constructor(
    private service: ArticleService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> {
    const articleId: number = route.params.articleId;

    return this.service.retrieveArticle(articleId);
  }

}
