import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @Input() itemsPerPage = 10;
  @Input() newCommentId = new Observable<number>();

  comments: PostComment[] = [];
  currentPage = 1;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.postService
      .getCommentsPaginated(this.post.postId, this.currentPage, this.itemsPerPage)
      .subscribe(comments => this.comments = comments);

    this.newCommentId.subscribe(commentId => {
      if (commentId) {
        this.postService
          .retrieveComment(this.post.postId, commentId)
          .subscribe(comment =>
            this.comments.unshift(comment)
          );
      }
    });
  }

  deleteComment(comment: PostComment) {
    this.postService
      .deleteComment(comment)
      .subscribe(
        () =>
          this.comments = this.comments.filter(c => c.commentId !== comment.commentId),
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao deletar comentário', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
