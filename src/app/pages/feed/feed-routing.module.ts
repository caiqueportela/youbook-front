import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListResolver } from 'src/app/shared/resolvers/post-list.resolver';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDetailResolver } from 'src/app/shared/resolvers/post-detail.resolver';
import { PostCommentDetailResolver } from 'src/app/shared/resolvers/post-comment-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    children: [
      {
        path: '',
        component: PostListComponent,
        resolve: {
          posts: PostListResolver,
        },
      },
      {
        path: 'post/:postId',
        children: [
          {
            path: '',
            component: PostDetailComponent,
            resolve: {
              post: PostDetailResolver,
            },
          },
          {
            path: 'edit',
            component: PostEditComponent,
            resolve: {
              post: PostDetailResolver,
            },
          },
          {
            path: 'comment/:commentId/edit',
            component: CommentEditComponent,
            resolve: {
              comment: PostCommentDetailResolver,
            },
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeedRoutingModule { }
