import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleListResolver implements Resolve<Observable<Article[]>> {

  constructor(
    private service: ArticleService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article[]> {
    return this.service.listPaginated(1);
  }

}
