import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { DangerMessageComponent } from './components/messages/danger-message/danger-message.component';
import { ShowIfLoggedDirective } from './directives/show-if-logged/show-if-logged.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { PostOwnerOnlyDirective } from './directives/post-owner-only/post-owner-only.directive';
import { CommentOwnerOnlyDirective } from './directives/comment-owner-only/comment-owner-only.directive';
import { BindHtmlDirective } from './directives/bind-html/bind-html.directive';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
  ],
  declarations: [
    DangerMessageComponent,
    ShowIfLoggedDirective,
    LoadingComponent,
    PostOwnerOnlyDirective,
    CommentOwnerOnlyDirective,
    BindHtmlDirective,
  ],
  exports: [
    DangerMessageComponent,
    ShowIfLoggedDirective,
    LoadingComponent,
    PostOwnerOnlyDirective,
    CommentOwnerOnlyDirective,
    BindHtmlDirective,
  ],
})
export class SharedModule { }
