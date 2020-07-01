import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/pt_br.js';

import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SpecificArticleComponent } from './specific-article/specific-article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleFormComponent } from './article-form/article-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
    ArticleRoutingModule,
    AvatarModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    SpecificArticleComponent,
    ArticleDetailComponent,
    ArticleCommentsComponent,
    CommentComponent,
    CommentEditComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    ArticleFormComponent
  ],
})
export class ArticleModule { }
