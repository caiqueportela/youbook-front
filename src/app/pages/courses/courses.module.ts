import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { SharedModule } from './../../shared/shared.module';
import { AngularMaterialModule } from './../../shared/modules/angular-material/angular-material.module';
import { DetailCourseComponent } from './detail-course/detail-course.component';

@NgModule({
  declarations: [ListCoursesComponent, DetailCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class CoursesModule { }
