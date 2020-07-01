import { AvatarModule } from 'ngx-avatar';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/pt_br.js';

import { CourseRoutingModule } from './course-routing.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CourseRoutingModule,
    SharedModule,
    RouterModule,
    AvatarModule,
    AngularMaterialModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  declarations: [
    ListCoursesComponent,
    DetailCourseComponent,
    CreateCourseComponent,
  ],
})
export class CourseModule { }
