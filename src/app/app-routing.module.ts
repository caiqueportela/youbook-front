import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then(m => m.FeedModule),
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'article',
    loadChildren: () => import('./pages/article/article.module').then(m => m.ArticleModule),
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/course/course.module').then(m => m.CourseModule),
    canActivate: [
      AuthGuard,
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [
      AuthGuard,
    ],
  },
  {
    path: 'error',
    component: GlobalErrorComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
