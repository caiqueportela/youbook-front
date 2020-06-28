import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { environment } from 'src/environments/environment';

import { Post } from 'src/app/models/post';
import { PostComment } from 'src/app/models/post-comment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }


  listPaginated(page: number = 1): Observable<Post[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get(`${API_URL}/api/posts`, { params })
      .pipe(
        map((response: any) =>
          response.items as Post[]
        )
      );
  }

  getCommentsPaginated(postId: number, page: number = 1): Observable<PostComment[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get(`${API_URL}/api/post/${postId}/comments`, { params })
      .pipe(
        map((response: any) =>
          response.items as PostComment[]
        )
      );
  }

  createPost(message: any) {
    return this.http.post(`${API_URL}/api/post`, message);
  }

}
