import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    AngularMaterialModule,
  ],
  declarations: [
    AdminComponent,
    ListUsersComponent,
    ListSubjectsComponent,
    SubjectCreateComponent,
  ],
})
export class AdminModule { }
