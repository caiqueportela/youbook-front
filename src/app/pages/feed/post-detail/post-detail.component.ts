import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/shared/services/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public options = {
    placeholderText: 'Comente algo...',
    charCounterCount: true,
    language: 'pt_br',
    height: 200,
  };

  post: Post;
  commentForm: FormGroup;
  newCommentId = new Subject<number>();


  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuiler: FormBuilder
  ) { }

  ngOnInit(): void {
    this.post = this.activatedRoute.snapshot.data.post;
    this.commentForm = this.formBuiler.group({
      message: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  deletePost(post: Post) {
    this.postService
      .deletePost(post)
      .subscribe(
        () =>
          this.router.navigate(['feed']),
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao deletar postagem', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

  makeComment() {
    if (this.commentForm.valid) {
      const message = this.commentForm.getRawValue();

      this.postService
        .createComment(this.post, message)
        .subscribe(
          (res: any) => {
            this.commentForm.reset();
            this.snackBar.open('Comentário criado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
            this.newCommentId.next(res.commentId);
          },
          (err) => {
            console.log(err);
            this.snackBar.open('Falha ao criar comentário!', 'X', { duration: 2000, panelClass: 'snack-danger' });
          }
        );
    }
  }

}
