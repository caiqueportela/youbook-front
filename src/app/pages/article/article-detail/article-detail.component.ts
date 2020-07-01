import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  public options = {
    placeholderText: 'Comente algo...',
    charCounterCount: true,
    language: 'pt_br',
    height: 200,
  };

  article: Article;
  commentForm: FormGroup;
  newCommentId = new Subject<number>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.article = this.activatedRoute.snapshot.data.article;
    this.commentForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  makeComment() {
    if (this.commentForm.valid) {
      const message = this.commentForm.getRawValue();

      this.articleService
        .createComment(this.article, message)
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

  deleteArticle() {
    this.articleService
      .deleteArticle(this.article)
      .subscribe(
        () =>
          this.router.navigate(['article']),
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao deletar artigo', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
