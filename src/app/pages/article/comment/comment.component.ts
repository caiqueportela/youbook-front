import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleComment } from 'src/app/models/article-comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: ArticleComment;

  @Output() deleteComment = new EventEmitter<ArticleComment>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['article', this.comment.article.articleId, 'comment', this.comment.commentId, 'edit']);
  }

  delete() {
    this.deleteComment.emit(this.comment);
  }

}
