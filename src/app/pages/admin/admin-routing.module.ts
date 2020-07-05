import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { SubjectListResolver } from 'src/app/shared/resolvers/subject-list.resolver';
import { SubjectCreateComponent } from './subject-create/subject-create.component';
import { UserListResolver } from 'src/app/shared/resolvers/user-list.resolver';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ListUsersComponent,
        resolve: {
          users: UserListResolver,
        },
      },
      {
        path: 'user',
        children: [
          {
            path: 'create',
            component: CreateUserComponent,
          },
        ],
      },
      {
        path: 'subject',
        children: [
          {
            path: '',
            component: ListSubjectsComponent,
            resolve: {
              subjects: SubjectListResolver,
            },
          },
          {
            path: 'create',
            component: SubjectCreateComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AdminRoutingModule { }
