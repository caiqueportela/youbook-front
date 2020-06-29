import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() commentsPerPage = 10;
  @Input() newCommentId = new Observable<number>();

  @Output() deletePost = new EventEmitter<Post>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['feed', 'post', this.post.postId, 'edit']);
  }

  delete() {
    this.deletePost.emit(this.post);
  }

  detail() {
    this.router.navigate(['feed', 'post', this.post.postId]);
  }

}
