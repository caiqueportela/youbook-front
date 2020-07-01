import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-specific-article',
  templateUrl: './specific-article.component.html',
  styleUrls: ['./specific-article.component.scss']
})
export class SpecificArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() preview: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detail() {
    this.router.navigate(['article', this.article.articleId]);
  }

}
