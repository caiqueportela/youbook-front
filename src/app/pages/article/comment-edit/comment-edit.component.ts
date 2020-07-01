import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ArticleComment } from 'src/app/models/article-comment';
import { ArticleService } from 'src/app/shared/services/article/article.service';

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

  comment: ArticleComment;

  commentForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
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

      this.articleService
        .updateComment(this.comment, message)
        .subscribe(
          () => {
            this.snackBar.open('Comentário atualizado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
            this.router.navigate(['article', this.comment.article.articleId]);
          },
          (err) => {
            console.log(err);
            this.snackBar.open('Falha ao editar comentário!', 'X', { duration: 2000, panelClass: 'snack-danger' });
          }
        );
    }
  }

}
