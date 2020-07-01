import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PostService } from 'src/app/shared/services/post/post.service';
import { PostComment } from 'src/app/models/post-comment';

@Injectable({
  providedIn: 'root'
})
export class PostCommentDetailResolver implements Resolve<Observable<PostComment>> {

  constructor(
    private service: PostService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostComment> {
    const postId: number = route.params.postId;
    const commentId: number = route.params.commentId;

    return this.service.retrieveComment(postId, commentId);
  }

}
