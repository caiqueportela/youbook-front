import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    children: [
      {
        path: '',
        component: PostListComponent,
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
