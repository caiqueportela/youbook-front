import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from './list-courses/list-courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';

const routes: Routes = [
  {
    path: '',
    component: ListCoursesComponent
  },
  {
    path: ':courseId',
    component: DetailCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
