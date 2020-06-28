import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/shared/services/post/post.service';
import { finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public options = {
    placeholderText: 'Compartilhe algo com o mundo...',
    charCounterCount: true,
    language: 'pt_br',
  };

  posts: Post[] = [];
  filter = '';
  hasMore = true;
  currentPage = 1;

  postForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.posts = this.activatedRoute.snapshot.data.posts;
    this.postForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  load(): void {
    this.postService
      .listPaginated(++this.currentPage)
      .subscribe(posts => {
        this.posts = this.posts.concat(posts);
        if (!posts.length) {
          this.hasMore = false;
        }
      });
  }

  makePost() {
    if (this.postForm.valid) {
      const message = this.postForm.getRawValue();

      this.postService
        .createPost(message)
        .pipe(
          finalize(
            () => this.postForm.reset()
          )
        )
        .subscribe(
          () => {
            this.snackBar.open('Postagem criada com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
            this.currentPage = 1;
            this.postService.listPaginated().subscribe(posts => this.posts = posts);
          },
          (err) => console.log(err)
        );
    }
  }

}
