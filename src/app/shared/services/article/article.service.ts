import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { environment } from 'src/environments/environment';

import { Article } from 'src/app/models/article';
import { ArticleComment } from 'src/app/models/article-comment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  listPaginated(page: number): Observable<Article[]> {
    const params = new HttpParams().append('page', page.toString()).append('items', '5');

    return this.http
      .get(`${API_URL}/api/articles`, { params })
      .pipe(
        map((response: any) =>
          response.items as Article[]
        )
      );
  }

  deleteArticle(article: Article) {
    return this.http
      .delete(`${API_URL}/api/article/${article.articleId}`);
  }

  retrieveArticle(articleId: number): Observable<Article> {
    return this.http
      .get<Article>(`${API_URL}/api/article/${articleId}`);
  }

  createArticle(article: any) {
    return this.http
      .post(`${API_URL}/api/article`, article);
  }

  updateArticle(article: Article, formData: any) {
    return this.http
      .patch(`${API_URL}/api/article/${article.articleId}`, formData);
  }

  retrieveComment(articleId: number, commentId: number): Observable<ArticleComment> {
    return this.http
      .get<ArticleComment>(`${API_URL}/api/article/${articleId}/comment/${commentId}`);
  }

  getCommentsPaginated(articleId: number, page: number): Observable<ArticleComment[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get(`${API_URL}/api/article/${articleId}/comments`, { params })
      .pipe(
        map((response: any) =>
          response.items as ArticleComment[]
        )
      );
  }

  deleteComment(comment: ArticleComment) {
    return this.http
      .delete(`${API_URL}/api/article/${comment.article.articleId}/comment/${comment.commentId}`);
  }

  createComment(article: Article, message: any) {
    return this.http
      .post(`${API_URL}/api/article/${article.articleId}/comment`, message);
  }

  updateComment(comment: ArticleComment, message: any) {
    return this.http
      .patch(`${API_URL}/api/article/${comment.article.articleId}/comment/${comment.commentId}`, message);
  }

}
