import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PostService } from 'src/app/shared/services/post/post.service';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostDetailResolver implements Resolve<Observable<Post>> {

  constructor(
    private service: PostService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    const postId: number = route.params.postId;

    return this.service.retrievePost(postId);
  }

}
