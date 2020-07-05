import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  hasMore = true;
  currentPage = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articles = this.activatedRoute.snapshot.data.articles;
  }

  load(): void {
    this.articleService
      .listPaginated(++this.currentPage)
      .subscribe(articles => {
        this.articles = this.articles.concat(articles);
        if (!articles.length) {
          this.hasMore = false;
        }
      });
  }

}
