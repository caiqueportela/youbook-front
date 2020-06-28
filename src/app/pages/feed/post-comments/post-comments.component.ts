import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from 'src/app/models/post';
import { PostComment } from 'src/app/models/post-comment';
import { PostService } from 'src/app/shared/services/post/post.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  @Input() post: Post;

  comments$: Observable<PostComment[]>;
  currentPage = 1;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.comments$ = this.postService.getCommentsPaginated(this.post.postId, this.currentPage);
  }

}
