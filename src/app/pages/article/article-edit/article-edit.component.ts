import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  article: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.article = this.activatedRoute.snapshot.data.article;
  }

  createArticle(formData: any) {
    this.articleService
      .updateArticle(this.article, formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Artigo atualizado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['article', this.article.articleId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao atualizar artigo!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
