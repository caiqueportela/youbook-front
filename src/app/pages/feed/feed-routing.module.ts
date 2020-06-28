import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListResolver } from 'src/app/shared/validators/post-list.resolver';

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
