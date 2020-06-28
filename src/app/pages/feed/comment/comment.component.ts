import { Component, OnInit, Input } from '@angular/core';

import { PostComment } from 'src/app/models/post-comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: PostComment;

  constructor() { }

  ngOnInit(): void {
  }

}
