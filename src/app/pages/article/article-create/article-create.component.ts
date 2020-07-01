import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createArticle(formData: any) {
    this.articleService
      .createArticle(formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Artigo criado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['article', res.articleId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao criar artigo!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
