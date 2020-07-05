import { AvatarModule } from 'ngx-avatar';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/pt_br.js';

import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { CourseComponent } from './course.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ChapterFormComponent } from './chapter/chapter-form/chapter-form.component';
import { ChapterCreateComponent } from './chapter/chapter-create/chapter-create.component';
import { ChapterEditComponent } from './chapter/chapter-edit/chapter-edit.component';
import { ActivityEditComponent } from './activity/activity-edit/activity-edit.component';
import { ActivityFormComponent } from './activity/activity-form/activity-form.component';
import { ActivityCreateComponent } from './activity/activity-create/activity-create.component';
import { CourseListPurchasedComponent } from './course-list-purchased/course-list-purchased.component';
import { SpecificCourseComponent } from './specific-course/specific-course.component';
import { CourseViewComponent } from './course-view/course-view.component';

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
    CourseComponent,
    CourseCreateComponent,
    CourseEditComponent,
    CourseFormComponent,
    CourseListComponent,
    CourseDetailComponent,
    ChapterCreateComponent,
    ChapterEditComponent,
    ChapterFormComponent,
    ActivityEditComponent,
    ActivityFormComponent,
    ActivityCreateComponent,
    CourseListPurchasedComponent,
    SpecificCourseComponent,
    CourseViewComponent,
  ],
})
export class CourseModule { }
