import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { PostComment } from 'src/app/models/post-comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: PostComment;

  @Output() deleteComment = new EventEmitter<PostComment>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['feed', 'post', this.comment.post.postId, 'comment', this.comment.commentId, 'edit']);
  }

  delete() {
    this.deleteComment.emit(this.comment);
  }

}
