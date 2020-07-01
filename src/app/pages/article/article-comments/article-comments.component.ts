import { Article } from 'src/app/models/article';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article/article.service';
import { ArticleComment } from 'src/app/models/article-comment';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss']
})
export class ArticleCommentsComponent implements OnInit {

  @Input() article: Article;
  @Input() newCommentId = new Observable<number>();

  comments: ArticleComment[] = [];
  currentPage = 1;

  constructor(
    private articleService: ArticleService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.articleService
      .getCommentsPaginated(this.article.articleId, this.currentPage)
      .subscribe(comments => this.comments = comments);

    this.newCommentId.subscribe(commentId => {
      if (commentId) {
        this.articleService
          .retrieveComment(this.article.articleId, commentId)
          .subscribe(comment =>
            this.comments.unshift(comment)
          );
      }
    });
  }

  deleteComment(comment: ArticleComment) {
    this.articleService
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
