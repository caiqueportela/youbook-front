import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from './list-courses/list-courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListCoursesComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateCourseComponent
  },
  {
    path: ':courseId',
    pathMatch: 'full',
    component: DetailCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
