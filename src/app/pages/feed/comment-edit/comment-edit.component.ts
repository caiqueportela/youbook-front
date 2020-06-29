import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PostComment } from 'src/app/models/post-comment';
import { PostService } from 'src/app/shared/services/post/post.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss']
})
export class CommentEditComponent implements OnInit {

  public options = {
    charCounterCount: true,
    language: 'pt_br',
    height: 400,
  };

  comment: PostComment;

  commentForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.comment = this.activatedRoute.snapshot.data.comment;
    this.commentForm = this.formBuilder.group({
      message: [this.comment.message, [Validators.required, Validators.minLength(1)]],
    });
  }

  editComment() {
    if (this.commentForm.valid) {
      const message = this.commentForm.getRawValue();

      this.postService
        .updateComment(this.comment, message)
        .subscribe(
          () => {
            this.snackBar.open('Comentário atualizado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
            this.router.navigate(['feed', 'post', this.comment.post.postId]);
          },
          (err) => {
            console.log(err);
            this.snackBar.open('Falha ao editar comentário!', 'X', { duration: 2000, panelClass: 'snack-danger' });
          }
        );
    }
  }

}
