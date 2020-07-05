import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';
import { UserComponent } from './list-users/user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SignupService } from 'src/app/core/services/signup/signup.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    AngularMaterialModule,
    AvatarModule,
  ],
  declarations: [
    AdminComponent,
    ListUsersComponent,
    ListSubjectsComponent,
    SubjectCreateComponent,
    UserComponent,
    CreateUserComponent,
  ],
  providers: [
    SignupService,
  ],
})
export class AdminModule { }
