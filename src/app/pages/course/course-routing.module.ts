import { CourseListPurchasedComponent } from './course-list-purchased/course-list-purchased.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorGuard } from 'src/app/core/guards/author.guard';
import { CourseDetailResolver } from 'src/app/shared/resolvers/course-detail.resolver';
import { CourseListResolver } from 'src/app/shared/resolvers/course-list.resolver';
import { ActivityDetailResolver } from 'src/app/shared/resolvers/activity-detail.resolver';
import { ChapterDetailResolver } from 'src/app/shared/resolvers/chapter-detail.resolver';
import { CourseListPurchasedResolver } from 'src/app/shared/resolvers/course-list-purchased.resolver';
import { CourseComponent } from 'src/app/pages/course/course.component';
import { CourseListComponent } from 'src/app/pages/course/course-list/course-list.component';
import { CourseCreateComponent } from 'src/app/pages/course/course-create/course-create.component';
import { CourseDetailComponent } from 'src/app/pages/course/course-detail/course-detail.component';
import { CourseEditComponent } from 'src/app/pages/course/course-edit/course-edit.component';
import { ChapterCreateComponent } from 'src/app/pages/course/chapter/chapter-create/chapter-create.component';
import { ChapterEditComponent } from 'src/app/pages/course/chapter/chapter-edit/chapter-edit.component';
import { ActivityCreateComponent } from 'src/app/pages/course/activity/activity-create/activity-create.component';
import { ActivityEditComponent } from 'src/app/pages/course/activity/activity-edit/activity-edit.component';
import { CourseViewComponent } from './course-view/course-view.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: '',
        component: CourseListComponent,
        resolve: {
          courses: CourseListResolver,
        },
      },
      {
        path: 'create',
        component: CourseCreateComponent,
        canActivate: [AuthorGuard],
      },
      {
        path: 'purchased',
        component: CourseListPurchasedComponent,
        resolve: {
          courses: CourseListPurchasedResolver,
        },
      },
      {
        path: ':courseId',
        children: [
          {
            path: '',
            component: CourseDetailComponent,
            resolve: {
              course: CourseDetailResolver,
            },
          },
          {
            path: 'view',
            component: CourseViewComponent,
            resolve: {
              course: CourseDetailResolver,
            },
          },
          {
            path: 'edit',
            canActivate: [AuthorGuard],
            children: [
              {
                path: '',
                component: CourseEditComponent,
                resolve: {
                  course: CourseDetailResolver,
                },
              },
            ],
          },
          {
            path: 'chapter',
            canActivate: [AuthorGuard],
            children: [
              {
                path: 'create',
                component: ChapterCreateComponent,
              },
              {
                path: ':chapterId',
                canActivate: [AuthorGuard],
                children: [
                  {
                    path: 'edit',
                    component: ChapterEditComponent,
                    resolve: {
                      chapter: ChapterDetailResolver,
                    },
                  },
                  {
                    path: 'activity',
                    canActivate: [AuthorGuard],
                    children: [
                      {
                        path: 'create',
                        component: ActivityCreateComponent,
                      },
                      {
                        path: ':activityId',
                        canActivate: [AuthorGuard],
                        children: [
                          {
                            path: 'edit',
                            component: ActivityEditComponent,
                            canActivate: [AuthorGuard],
                            resolve: {
                              activity: ActivityDetailResolver,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
