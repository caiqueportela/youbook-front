import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
    FeedRoutingModule
  ],
  declarations: [
    FeedComponent,
    PostListComponent,
    PostDetailComponent
  ],
})
export class FeedModule { }
