import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListResolver } from 'src/app/shared/resolvers/article-list.resolver';
import { ArticleDetailResolver } from 'src/app/shared/resolvers/article-detail.resolver';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleCommentDetailResolver } from 'src/app/shared/resolvers/article-comment-detail.resolver';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { AuthorGuard } from 'src/app/core/guards/author.guard';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: '',
        component: ArticleListComponent,
        resolve: {
          articles: ArticleListResolver,
        },
      },
      {
        path: 'create',
        component: ArticleCreateComponent,
        canActivate: [AuthorGuard],
      },
      {
        path: ':articleId',
        children: [
          {
            path: '',
            component: ArticleDetailComponent,
            resolve: {
              article: ArticleDetailResolver,
            },
          },
          {
            path: 'edit',
            component: ArticleEditComponent,
            resolve: {
              article: ArticleDetailResolver,
            },
            canActivate: [AuthorGuard],
          },
          {
            path: 'comment/:commentId/edit',
            component: CommentEditComponent,
            resolve: {
              comment: ArticleCommentDetailResolver,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
