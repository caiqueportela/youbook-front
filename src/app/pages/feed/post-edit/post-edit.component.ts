import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/shared/services/post/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  public options = {
    charCounterCount: true,
    language: 'pt_br',
    height: 400,
  };

  post: Post;

  postForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.post = this.activatedRoute.snapshot.data.post;
    this.postForm = this.formBuilder.group({
      message: [this.post.message, [Validators.required, Validators.minLength(1)]],
    });
  }

  editPost() {
    if (this.postForm.valid) {
      const message = this.postForm.getRawValue();

      this.postService
        .updatePost(this.post, message)
        .subscribe(
          () => {
            this.snackBar.open('Postagem atualizada com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
            this.router.navigate(['feed', 'post', this.post.postId]);
          },
          (err) => {
            console.log(err);
            this.snackBar.open('Falha ao editar postagem!', 'X', { duration: 2000, panelClass: 'snack-danger' });
          }
        );
    }
  }

}
