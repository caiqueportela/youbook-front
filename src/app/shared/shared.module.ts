import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { DangerMessageComponent } from './components/messages/danger-message/danger-message.component';
import { ShowIfLoggedDirective } from './directives/show-if-logged/show-if-logged.directive';
import { LoadingComponent } from './components/loading/loading.component';

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
  ],
  exports: [
    DangerMessageComponent,
    ShowIfLoggedDirective,
    LoadingComponent,
  ],
})
export class SharedModule { }
